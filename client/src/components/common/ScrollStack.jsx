import { useEffect, useRef } from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

/*
 * Stacking cards, rebuilt on CSS `position: sticky`.
 * The browser pins each card on the compositor, so nothing shakes while scrolling (the previous
 * JS-translate version moved cards from scroll events, which lags behind native scrolling).
 * JS only shrinks a card slightly while the next one slides over it.
 *
 *  itemDistance      px of scrolling between one card and the next
 *  itemStackDistance px each card sits lower than the previous one once pinned (0 = next card hides the previous completely)
 *  stackTop          CSS value for the pinned position, e.g. "calc(var(--header-height) + 16px)"
 *  baseScale/itemScale  how small a covered card gets: baseScale + index * itemScale
 */
const ScrollStack = ({
  children,
  className = "",
  itemDistance = 40,
  itemStackDistance = 0,
  stackTop = "calc(var(--header-height, 64px) + 16px)",
  baseScale = 0.94,
  itemScale = 0.01,
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(root.querySelectorAll(".scroll-stack-card"));
    let frame = 0;

    const update = () => {
      frame = 0;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const pinned = parseFloat(getComputedStyle(card).top) || 0;
        const h = card.offsetHeight || 1;
        const nextTop = next.getBoundingClientRect().top;
        // 0 while the next card is still far below, 1 once it fully covers this one
        const p = Math.min(1, Math.max(0, 1 - (nextTop - (pinned + itemStackDistance)) / h));
        const target = baseScale + i * itemScale;
        card.style.transform = p ? `scale(${(1 - p * (1 - target)).toFixed(4)})` : "";
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cards.forEach((c) => (c.style.transform = ""));
    };
  }, [itemStackDistance, baseScale, itemScale]);

  return (
    <div
      ref={rootRef}
      className={`scroll-stack ${className}`.trim()}
      style={{ "--ss-gap": `${itemDistance}px`, "--ss-top": stackTop, "--ss-step": `${itemStackDistance}px` }}
    >
      {children}
    </div>
  );
};

export default ScrollStack;
