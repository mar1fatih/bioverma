import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function NiacinamidePage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('niacinamide.badge')} | Bioverma`}</title>
      <meta name="description" content={t('niacinamide.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/serum-niacinamide" />

      <meta property="og:title" content={`${t('niacinamide.badge')} | Bioverma`} />
      <meta property="og:description" content={t('niacinamide.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-niacinamide.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('niacinamide.badge')}</span>
          <h1 className={styles.heroTitle}>{t('niacinamide.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('niacinamide.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('niacinamide.metaConcentration')}</span>
            <span className={styles.metaPill}>50ml</span>
            <span className={styles.metaPill}>{t('niacinamide.metaAllSkin')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=niacinamide`} className={styles.ctaPrimary}>
            {t('niacinamide.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/serum-niacinamide.png"
              alt={t('niacinamide.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('niacinamide.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/serum-niacinamide.png"
                alt={t('niacinamide.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('niacinamide.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('niacinamide.specWeightLabel')}</span>
                <span className={styles.specValue}>50ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('niacinamide.specConcentrationLabel')}</span>
                <span className={styles.specValue}>{t('niacinamide.specConcentrationValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('niacinamide.specUseLabel')}</span>
                <span className={styles.specValue}>{t('niacinamide.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('niacinamide.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('niacinamide.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('niacinamide.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('niacinamide.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('niacinamide.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('niacinamide.feature1Title')}</strong> — {t('niacinamide.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('niacinamide.feature2Title')}</strong> — {t('niacinamide.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🛡️</span>
            <div>
              <strong>{t('niacinamide.feature3Title')}</strong> — {t('niacinamide.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌿</span>
            <div>
              <strong>{t('niacinamide.feature4Title')}</strong> — {t('niacinamide.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('niacinamide.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('niacinamide.benefit1Title')}</h3>
            <p>{t('niacinamide.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('niacinamide.benefit2Title')}</h3>
            <p>{t('niacinamide.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('niacinamide.benefit3Title')}</h3>
            <p>{t('niacinamide.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('niacinamide.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('niacinamide.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('niacinamide.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('niacinamide.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('niacinamide.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('niacinamide.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('niacinamide.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('niacinamide.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('niacinamide.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('niacinamide.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('niacinamide.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('niacinamide.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('niacinamide.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('niacinamide.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=niacinamide`} className={styles.ctaPrimary}>
          {t('niacinamide.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
