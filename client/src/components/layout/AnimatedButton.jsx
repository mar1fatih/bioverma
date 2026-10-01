import { useTranslation } from "../../hooks/useTranslation";
import './AnimatedButton.css';

export default function AnimatedButton() {
  const t = useTranslation();
  const L = (k) => t(`orderLanding.${k}`);

  return (
    <div className="draw-button-wrapper">
      <button className="draw-button" onClick={() => {
                                                        document
                                                            .getElementById("order-form")
                                                            ?.scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "start",
                                                            });
                                                        }}>
        <svg viewBox="0 0 180 60" preserveAspectRatio="none">
            <rect
            x="1"
            y="1"
            width="178"
            height="58"
            rx="29"
            className="draw-border"
            />
        </svg>

        <span>{L("cta")}</span>
        </button>
    </div>
  );
}