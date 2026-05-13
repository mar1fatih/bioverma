import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { ROUTES } from '../constants/routes';
import { CategoryGrid } from '../components/store/CategoryGrid';
import styles from './HomePage.module.css';

export function HomePage() {
  const t = useTranslation();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t('home.title')}</h1>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
      </section>
      {/* hero image */}
      <div className={styles.flowerBorder}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.botanicalBorderSvg}
          viewBox="0 0 680 460"
          aria-hidden="true"
        >
          <defs>
            <style>{`
              .leaf-sway-1 { transform-origin: bottom center; animation: sway1 4s ease-in-out infinite; }
              .leaf-sway-2 { transform-origin: bottom center; animation: sway2 5s ease-in-out infinite; }
              .leaf-sway-3 { transform-origin: bottom center; animation: sway3 3.5s ease-in-out infinite; }
              .leaf-sway-r1 { transform-origin: bottom center; animation: sway1 4.5s ease-in-out infinite reverse; }
              .leaf-sway-r2 { transform-origin: bottom center; animation: sway2 6s ease-in-out infinite reverse; }

              .vine-draw   { stroke-dasharray: 200; stroke-dashoffset: 200; animation: drawVine 2s ease-out forwards; }
              .vine-draw-2 { stroke-dasharray: 200; stroke-dashoffset: 200; animation: drawVine 2.4s ease-out forwards; }
              .vine-draw-3 { stroke-dasharray: 160; stroke-dashoffset: 160; animation: drawVine 2s ease-out 0.3s forwards; }

              .berry-pop-1 { animation: berryPop 0.4s ease-out 1.8s backwards; }
              .berry-pop-2 { animation: berryPop 0.4s ease-out 2s backwards; }
              .berry-pop-3 { animation: berryPop 0.4s ease-out 2.2s backwards; }

              .border-glow  { animation: borderPulse 3s ease-in-out infinite; }
              .inner-border { animation: innerFade 3s ease-in-out infinite; }

              .leaf-fade-in-1 { animation: leafFadeIn 0.6s ease-out 0.5s backwards; }
              .leaf-fade-in-2 { animation: leafFadeIn 0.6s ease-out 0.8s backwards; }
              .leaf-fade-in-3 { animation: leafFadeIn 0.6s ease-out 1.1s backwards; }
              .leaf-fade-in-4 { animation: leafFadeIn 0.6s ease-out 1.4s backwards; }

              @keyframes sway1 {
                0%, 100% { transform: rotate(-4deg); }
                50%       { transform: rotate(4deg); }
              }
              @keyframes sway2 {
                0%, 100% { transform: rotate(3deg); }
                50%       { transform: rotate(-5deg); }
              }
              @keyframes sway3 {
                0%, 100% { transform: rotate(-6deg); }
                50%       { transform: rotate(2deg); }
              }
              @keyframes drawVine {
                to { stroke-dashoffset: 0; }
              }
              @keyframes berryPop {
                0%   { transform: scale(0);   opacity: 0; }
                70%  { transform: scale(1.3);             }
                100% { transform: scale(1);   opacity: 1; }
              }
              @keyframes borderPulse {
                0%, 100% { stroke-opacity: 1;   }
                50%       { stroke-opacity: 0.5; }
              }
              @keyframes innerFade {
                0%, 100% { stroke-opacity: 0.6; }
                50%       { stroke-opacity: 1;   }
              }
              @keyframes leafFadeIn {
                from { opacity: 0; transform: scale(0.6); }
                to   { opacity: 1; transform: scale(1);   }
              }
            `}</style>
          </defs>

          {/* Outer frame */}
          <rect x="28" y="28" width="624" height="404" rx="22" fill="#e8f5e9" stroke="#4a7c59" strokeWidth="2.5" className="border-glow"/>
          <rect x="36" y="36" width="608" height="388" rx="18" fill="none" stroke="#7db87a" strokeWidth="1" className="inner-border"/>

          {/* Top-left leaves */}
          <g transform="translate(28,28) rotate(-40,0,0)" className="leaf-fade-in-1">
            <g className="leaf-sway-1">
              <ellipse cx="-18" cy="-38" rx="13" ry="26" fill="#4a7c59" opacity="0.92"/>
              <line x1="-18" y1="-12" x2="-18" y2="-62" stroke="#2d5a3d" strokeWidth="1.2"/>
              <line x1="-18" y1="-35" x2="-10" y2="-48" stroke="#2d5a3d" strokeWidth="0.7"/>
              <line x1="-18" y1="-35" x2="-26" y2="-48" stroke="#2d5a3d" strokeWidth="0.7"/>
            </g>
          </g>
          <g transform="translate(55,18) rotate(15)" className="leaf-fade-in-2">
            <g className="leaf-sway-2">
              <ellipse cx="0" cy="-20" rx="9" ry="19" fill="#7db87a" opacity="0.88"/>
              <line x1="0" y1="-2" x2="0" y2="-38" stroke="#4a7c59" strokeWidth="1"/>
            </g>
          </g>
          <g transform="translate(80,30) rotate(40)" className="leaf-fade-in-3">
            <g className="leaf-sway-3">
              <ellipse cx="0" cy="-12" rx="6" ry="13" fill="#a8d5a2" opacity="0.8"/>
            </g>
          </g>
          <path d="M 28 60 Q 10 40 30 20 Q 50 5 70 22" stroke="#4a7c59" strokeWidth="1.5" fill="none" opacity="0.7" className="vine-draw"/>
          <circle cx="72" cy="22" r="3.5" fill="#2d5a3d" opacity="0.7" className="berry-pop-1"/>
          <circle cx="62" cy="17" r="2.5" fill="#4a7c59" opacity="0.6" className="berry-pop-2"/>

          {/* Top-right leaves (mirror) */}
          <g transform="translate(652,28) rotate(40,-20,0)" className="leaf-fade-in-1">
            <g className="leaf-sway-r1">
              <ellipse cx="18" cy="-38" rx="13" ry="26" fill="#4a7c59" opacity="0.92"/>
              <line x1="18" y1="-12" x2="18" y2="-62" stroke="#2d5a3d" strokeWidth="1.2"/>
              <line x1="18" y1="-35" x2="26" y2="-48" stroke="#2d5a3d" strokeWidth="0.7"/>
              <line x1="18" y1="-35" x2="10" y2="-48" stroke="#2d5a3d" strokeWidth="0.7"/>
            </g>
          </g>
          <g transform="translate(625,18) rotate(-15)" className="leaf-fade-in-2">
            <g className="leaf-sway-2">
              <ellipse cx="0" cy="-20" rx="9" ry="19" fill="#7db87a" opacity="0.88"/>
              <line x1="0" y1="-2" x2="0" y2="-38" stroke="#4a7c59" strokeWidth="1"/>
            </g>
          </g>
          <path d="M 652 60 Q 670 40 650 20 Q 630 5 610 22" stroke="#4a7c59" strokeWidth="1.5" fill="none" opacity="0.7" className="vine-draw"/>
          <circle cx="608" cy="22" r="3.5" fill="#2d5a3d" opacity="0.7" className="berry-pop-1"/>

          {/* Bottom-left leaves */}
          <g transform="translate(28,432) rotate(40,0,0)" className="leaf-fade-in-4">
            <g className="leaf-sway-2">
              <ellipse cx="-18" cy="38" rx="13" ry="26" fill="#4a7c59" opacity="0.92"/>
              <line x1="-18" y1="12" x2="-18" y2="62" stroke="#2d5a3d" strokeWidth="1.2"/>
            </g>
          </g>
          <g transform="translate(55,442) rotate(-15)" className="leaf-fade-in-3">
            <g className="leaf-sway-r1">
              <ellipse cx="0" cy="20" rx="9" ry="19" fill="#7db87a" opacity="0.88"/>
            </g>
          </g>
          <path d="M 28 400 Q 10 420 30 440 Q 50 455 70 438" stroke="#4a7c59" strokeWidth="1.5" fill="none" opacity="0.7" className="vine-draw-2"/>
          <circle cx="72" cy="438" r="3.5" fill="#2d5a3d" opacity="0.7" className="berry-pop-1"/>

          {/* Bottom-right leaves */}
          <g transform="translate(652,432) rotate(-40,20,0)" className="leaf-fade-in-4">
            <g className="leaf-sway-r2">
              <ellipse cx="18" cy="38" rx="13" ry="26" fill="#4a7c59" opacity="0.92"/>
              <line x1="18" y1="12" x2="18" y2="62" stroke="#2d5a3d" strokeWidth="1.2"/>
            </g>
          </g>
          <path d="M 652 400 Q 670 420 650 440 Q 630 455 610 438" stroke="#4a7c59" strokeWidth="1.5" fill="none" opacity="0.7" className="vine-draw-2"/>

          {/* Top center vine */}
          <path d="M 200 28 Q 280 10 340 26 Q 400 10 480 28" stroke="#7db87a" strokeWidth="1.2" fill="none" opacity="0.6" className="vine-draw-3"/>
          <g transform="translate(340,22) rotate(5)" className="leaf-fade-in-2">
            <g className="leaf-sway-1">
              <ellipse cx="0" cy="-11" rx="8" ry="15" fill="#4a7c59" opacity="0.8"/>
            </g>
          </g>

          {/* Bottom center vine */}
          <path d="M 200 432 Q 280 450 340 434 Q 400 450 480 432" stroke="#7db87a" strokeWidth="1.2" fill="none" opacity="0.6" className="vine-draw-3"/>
          <g transform="translate(340,438) rotate(-5)" className="leaf-fade-in-3">
            <g className="leaf-sway-r1">
              <ellipse cx="0" cy="11" rx="8" ry="15" fill="#4a7c59" opacity="0.8"/>
            </g>
          </g>

          {/* The actual image sits inside via foreignObject */}
          <foreignObject x="40" y="40" width="600" height="380">
            <img
              xmlns="http://www.w3.org/1999/xhtml"
              src="./main.png"
              style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'14px'}}
              alt=""
            />
          </foreignObject>
        </svg>
      </div>
      {/* end of hero image */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('home.featuredProductTitle')}</h2>
        <div className={styles.productGrid}>
          <Link to={ROUTES.BIOVERMA} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-product.png"
                alt={t('bioverma.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProductName')}</h3>
              <p className={styles.productText}>{t('home.featuredProductText')}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProductPrice')}</span>
                <span className={styles.productCta}>{t('home.featuredProductCta')}</span>
              </div>
            </div>
          </Link>

          <Link to={ROUTES.ANTICHUTE} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-anti-chute.png"
                alt={t('antiChute.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct2Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct2Text')}</p>
              <span className={styles.productCta}>{t('home.featuredProduct2Cta')}</span>
            </div>
          </Link>

          <Link to={ROUTES.RETINOLE} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-retinole.png"
                alt={t('retinole.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct3Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct3Text')}</p>
              <span className={styles.productCta}>{t('home.featuredProduct3Cta')}</span>
            </div>
          </Link>

          <Link to={ROUTES.PROTEINES} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-proteines.png"
                alt={t('proteines.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct4Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct4Text')}</p>
              <span className={styles.productCta}>{t('home.featuredProduct4Cta')}</span>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('home.shopByCategory')}</h2>
        <CategoryGrid />
      </section>
    </div>
  );
}
