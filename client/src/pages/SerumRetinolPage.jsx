import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function SerumRetinolPage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('serumRetinol.badge')} | Bioverma`}</title>
      <meta name="description" content={t('serumRetinol.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/serum-retinol" />

      <meta property="og:title" content={`${t('serumRetinol.badge')} | Bioverma`} />
      <meta property="og:description" content={t('serumRetinol.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-serum-retinol.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('serumRetinol.badge')}</span>
          <h1 className={styles.heroTitle}>{t('serumRetinol.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('serumRetinol.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('serumRetinol.metaConcentration')}</span>
            <span className={styles.metaPill}>50ml</span>
            <span className={styles.metaPill}>{t('serumRetinol.metaAntiAge')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=serum-retanol`} className={styles.ctaPrimary}>
            {t('serumRetinol.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/bioverma-serum-retinol.png"
              alt={t('serumRetinol.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumRetinol.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/bioverma-serum-retinol.png"
                alt={t('serumRetinol.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('serumRetinol.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumRetinol.specWeightLabel')}</span>
                <span className={styles.specValue}>50ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumRetinol.specConcentrationLabel')}</span>
                <span className={styles.specValue}>{t('serumRetinol.specConcentrationValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumRetinol.specUseLabel')}</span>
                <span className={styles.specValue}>{t('serumRetinol.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumRetinol.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('serumRetinol.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumRetinol.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('serumRetinol.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumRetinol.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('serumRetinol.feature1Title')}</strong> — {t('serumRetinol.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('serumRetinol.feature2Title')}</strong> — {t('serumRetinol.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🛡️</span>
            <div>
              <strong>{t('serumRetinol.feature3Title')}</strong> — {t('serumRetinol.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌙</span>
            <div>
              <strong>{t('serumRetinol.feature4Title')}</strong> — {t('serumRetinol.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumRetinol.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('serumRetinol.benefit1Title')}</h3>
            <p>{t('serumRetinol.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('serumRetinol.benefit2Title')}</h3>
            <p>{t('serumRetinol.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('serumRetinol.benefit3Title')}</h3>
            <p>{t('serumRetinol.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumRetinol.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('serumRetinol.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('serumRetinol.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('serumRetinol.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('serumRetinol.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumRetinol.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('serumRetinol.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('serumRetinol.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('serumRetinol.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('serumRetinol.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('serumRetinol.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('serumRetinol.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('serumRetinol.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('serumRetinol.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=serum-retanol`} className={styles.ctaPrimary}>
          {t('serumRetinol.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
