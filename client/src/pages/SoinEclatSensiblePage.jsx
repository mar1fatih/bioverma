import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function SoinEclatSensiblePage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('soinEclatSensible.badge')} | Bioverma`}</title>
      <meta name="description" content={t('soinEclatSensible.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/soin-eclat-sensible" />

      <meta property="og:title" content={`${t('soinEclatSensible.badge')} | Bioverma`} />
      <meta property="og:description" content={t('soinEclatSensible.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-soin-eclat-sensible.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('soinEclatSensible.badge')}</span>
          <h1 className={styles.heroTitle}>{t('soinEclatSensible.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('soinEclatSensible.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('soinEclatSensible.metaNoAlcohol')}</span>
            <span className={styles.metaPill}>50g</span>
            <span className={styles.metaPill}>{t('soinEclatSensible.metaSensitiveSkin')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=eclat-zone-intime`} className={styles.ctaPrimary}>
            {t('soinEclatSensible.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/bioverma-soin-eclat-sensible.png"
              alt={t('soinEclatSensible.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('soinEclatSensible.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/bioverma-soin-eclat-sensible.png"
                alt={t('soinEclatSensible.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('soinEclatSensible.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('soinEclatSensible.specWeightLabel')}</span>
                <span className={styles.specValue}>50g</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('soinEclatSensible.specFormulaLabel')}</span>
                <span className={styles.specValue}>{t('soinEclatSensible.specFormulaValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('soinEclatSensible.specUseLabel')}</span>
                <span className={styles.specValue}>{t('soinEclatSensible.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('soinEclatSensible.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('soinEclatSensible.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('soinEclatSensible.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('soinEclatSensible.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('soinEclatSensible.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌸</span>
            <div>
              <strong>{t('soinEclatSensible.feature1Title')}</strong> — {t('soinEclatSensible.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('soinEclatSensible.feature2Title')}</strong> — {t('soinEclatSensible.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('soinEclatSensible.feature3Title')}</strong> — {t('soinEclatSensible.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🛡️</span>
            <div>
              <strong>{t('soinEclatSensible.feature4Title')}</strong> — {t('soinEclatSensible.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('soinEclatSensible.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('soinEclatSensible.benefit1Title')}</h3>
            <p>{t('soinEclatSensible.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('soinEclatSensible.benefit2Title')}</h3>
            <p>{t('soinEclatSensible.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('soinEclatSensible.benefit3Title')}</h3>
            <p>{t('soinEclatSensible.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('soinEclatSensible.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('soinEclatSensible.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('soinEclatSensible.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('soinEclatSensible.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('soinEclatSensible.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('soinEclatSensible.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('soinEclatSensible.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('soinEclatSensible.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('soinEclatSensible.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('soinEclatSensible.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('soinEclatSensible.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('soinEclatSensible.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('soinEclatSensible.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('soinEclatSensible.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=eclat-zone-intime`} className={styles.ctaPrimary}>
          {t('soinEclatSensible.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
