import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function CremeSolairePage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('cremeSolaire.badge')} | Bioverma`}</title>
      <meta name="description" content={t('cremeSolaire.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/creme-solaire" />

      <meta property="og:title" content={`${t('cremeSolaire.badge')} | Bioverma`} />
      <meta property="og:description" content={t('cremeSolaire.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-creme-solaire.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('cremeSolaire.badge')}</span>
          <h1 className={styles.heroTitle}>{t('cremeSolaire.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('cremeSolaire.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('cremeSolaire.metaSpf')}</span>
            <span className={styles.metaPill}>60ml</span>
            <span className={styles.metaPill}>{t('cremeSolaire.metaAllSkin')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=ecran_solaire`} className={styles.ctaPrimary}>
            {t('cremeSolaire.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/ecran-solaire.png"
              alt={t('cremeSolaire.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('cremeSolaire.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/ecran-solaire.png"
                alt={t('cremeSolaire.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('cremeSolaire.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('cremeSolaire.specWeightLabel')}</span>
                <span className={styles.specValue}>60ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('cremeSolaire.specSpfLabel')}</span>
                <span className={styles.specValue}>{t('cremeSolaire.specSpfValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('cremeSolaire.specUseLabel')}</span>
                <span className={styles.specValue}>{t('cremeSolaire.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('cremeSolaire.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('cremeSolaire.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('cremeSolaire.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('cremeSolaire.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('cremeSolaire.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🛡️</span>
            <div>
              <strong>{t('cremeSolaire.feature1Title')}</strong> — {t('cremeSolaire.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('cremeSolaire.feature2Title')}</strong> — {t('cremeSolaire.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('cremeSolaire.feature3Title')}</strong> — {t('cremeSolaire.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>☀️</span>
            <div>
              <strong>{t('cremeSolaire.feature4Title')}</strong> — {t('cremeSolaire.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('cremeSolaire.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('cremeSolaire.benefit1Title')}</h3>
            <p>{t('cremeSolaire.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('cremeSolaire.benefit2Title')}</h3>
            <p>{t('cremeSolaire.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('cremeSolaire.benefit3Title')}</h3>
            <p>{t('cremeSolaire.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('cremeSolaire.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('cremeSolaire.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('cremeSolaire.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('cremeSolaire.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('cremeSolaire.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('cremeSolaire.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('cremeSolaire.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('cremeSolaire.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('cremeSolaire.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('cremeSolaire.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('cremeSolaire.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('cremeSolaire.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('cremeSolaire.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('cremeSolaire.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=ecran_solaire`} className={styles.ctaPrimary}>
          {t('cremeSolaire.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
