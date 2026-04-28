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
              <span className={styles.productCta}>{t('home.featuredProductCta')}</span>
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
