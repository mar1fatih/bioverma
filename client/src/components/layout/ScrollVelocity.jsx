import {
  useRef,
  useLayoutEffect,
  useState,
  useEffect
} from 'react';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

import { useLanguage } from '../../context/LanguageContext';

import './ScrollVelocity.css';


function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [ref]);

  return width;
}


export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = {
    input: [0, 1000],
    output: [0, 5]
  },
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle
}) => {

  /*
   * Get the current language directly from
   * your existing LanguageContext.
   */
  const { locale } = useLanguage();

  const isArabic = locale === 'ar';


  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = '',
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
    isArabic
  }) {

    const baseX = useMotionValue(0);

    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};

    const { scrollY } = useScroll(scrollOptions);

    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400
    });


    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      {
        clamp: false
      }
    );


    const copyRef = useRef(null);

    const copyWidth = useElementWidth(copyRef);


    /*
     * Loop the animation.
     */
    function wrap(min, max, v) {
      const range = max - min;

      const mod =
        (((v - min) % range) + range) % range;

      return mod + min;
    }


    const x = useTransform(baseX, v => {

      if (copyWidth === 0) {
        return '0px';
      }

      return `${wrap(-copyWidth, 0, v)}px`;
    });


    /*
     * IMPORTANT:
     *
     * We DON'T use RTL for the animation container.
     *
     * The animation itself always uses the same
     * LTR layout. Arabic is reversed only through
     * the animation direction.
     */
    const directionFactor = useRef(
      isArabic ? -1 : 1
    );


    /*
     * Reset animation when language changes.
     */
    useEffect(() => {

      directionFactor.current =
        isArabic ? -1 : 1;

      baseX.set(0);

    }, [isArabic, baseX]);


    useAnimationFrame((t, delta) => {

      /*
       * Current direction.
       */
      let currentDirection =
        directionFactor.current;


      /*
       * Base movement.
       */
      let moveBy =
        currentDirection *
        baseVelocity *
        (delta / 1000);


      const currentVelocityFactor =
        velocityFactor.get();


      /*
       * Scroll direction.
       *
       * The Arabic direction is inverted here,
       * but the DOM layout remains LTR.
       */
      if (currentVelocityFactor < 0) {

        directionFactor.current =
          isArabic ? 1 : -1;

      } else if (currentVelocityFactor > 0) {

        directionFactor.current =
          isArabic ? -1 : 1;
      }


      /*
       * Apply scroll velocity.
       */
      moveBy +=
        directionFactor.current *
        moveBy *
        currentVelocityFactor;


      /*
       * Move.
       */
      baseX.set(
        baseX.get() + moveBy
      );
    });


    /*
     * Create copies.
     *
     * IMPORTANT:
     * No &nbsp; here.
     *
     * That was contributing to the strange
     * spacing with Arabic RTL text.
     */
    const spans = [];

    for (let i = 0; i < numCopies; i++) {

      spans.push(
        <span
          className={className}
          key={i}
          ref={i === 0 ? copyRef : null}

          /*
           * Direction belongs to the text,
           * NOT the animation container.
           */
          dir={isArabic ? 'rtl' : 'ltr'}

          lang={isArabic ? 'ar' : 'fr'}
        >
          {children}
        </span>
      );
    }


    return (
      <div
        className={parallaxClassName}
        style={parallaxStyle}

        /*
         * Keep animation layout LTR.
         */
        dir="ltr"
      >

        <motion.div
          className={scrollerClassName}
          style={{
            x,
            ...scrollerStyle
          }}

          /*
           * VERY IMPORTANT:
           * Never use dir="rtl" here.
           */
          dir="ltr"
        >
          {spans}
        </motion.div>

      </div>
    );
  }


  return (
    <section
      className={
        isArabic
          ? 'scroll-velocity-ar'
          : 'scroll-velocity-fr'
      }

      /*
       * The section can still follow the page language.
       */
      dir={isArabic ? 'rtl' : 'ltr'}

      lang={locale}
    >

      {texts.map((text, index) => (

        <VelocityText

          /*
           * Force a fresh animation instance
           * when language changes.
           */
          key={`${locale}-${index}`}

          className={className}

          /*
           * Keep the original alternating rows.
           */
          baseVelocity={
            index % 2 !== 0
              ? -velocity
              : velocity
          }

          scrollContainerRef={
            scrollContainerRef
          }

          damping={damping}

          stiffness={stiffness}

          numCopies={numCopies}

          velocityMapping={
            velocityMapping
          }

          parallaxClassName={
            parallaxClassName
          }

          scrollerClassName={
            scrollerClassName
          }

          parallaxStyle={
            parallaxStyle
          }

          scrollerStyle={
            scrollerStyle
          }

          isArabic={isArabic}

        >
          {text}

        </VelocityText>

      ))}

    </section>
  );
};


export default ScrollVelocity;