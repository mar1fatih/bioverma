import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import { CategoryGrid } from '../components/store/CategoryGrid';
import styles from './HomePage.module.css';
import TopBar from '../components/layout/topBar';

export function HomePage() {
  const t = useTranslation();

  const seoTitle = `Bioverma | ${t('home.title')}`;
  const seoDesc = t('home.subtitle');

  return (
    <>
    <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href="https://bioverma.netlify.app/" />

        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bioverma.netlify.app/main.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>{t('home.title')}</h1>
        <p className={styles.subtitle}>{t('home.subtitle')}</p>
      </section>

      <div className={styles.heroImageWrap}>
        <img src="/main.png" alt={t('home.heroImageAlt')} className={styles.heroImage} />
      </div>

      <TopBar />

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
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct2Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct2Cta')}</span>
              </div>
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
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct3Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct3Cta')}</span>
              </div>
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
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct4Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct4Cta')}</span>
              </div>
            </div>
          </Link>
          <Link to={ROUTES.ECRANSOLAIRE} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/ecran-solaire.png"
                alt={t('ecranSolaire.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct5Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct5Text')}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct5Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct5Cta')}</span>
              </div>
            </div>
          </Link>
          <Link to={ROUTES.NIACINAMIDE} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/serum-niacinamide.png"
                alt={t('serumNiacinamide.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct6Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct6Text')}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct6Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct6Cta')}</span>
              </div>
            </div>
          </Link>
          <Link to={ROUTES.HYDRATANT} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/serum-hydratante.png"
                alt={t('serumHydratante.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct7Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct7Text')}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct7Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct7Cta')}</span>
              </div>
            </div>
          </Link>
          <Link to={ROUTES.SERUMRITANOL} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/serum-retinol.png"
                alt={t('serumRetinol.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct8Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct8Text')}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct8Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct8Cta')}</span>
              </div>
            </div>
          </Link>
          <Link to={ROUTES.INTIME} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/eclat-zone-intime.png"
                alt={t('eclatZoneIntime.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct9Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct9Text')}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{t('home.featuredProduct9Price')}</span>
                <span className={styles.productCta}>{t('home.featuredProduct9Cta')}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('home.shopByCategory')}</h2>
        <CategoryGrid />
      </section>
    </div>
    </>
  );
}
