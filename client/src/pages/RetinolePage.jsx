import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function RetinolePage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('retinole.badge')} | Bioverma`}</title>
      <meta name="description" content={t('retinole.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/creme-retinol" />
      
      <meta property="og:title" content={`${t('retinole.badge')} | Bioverma`} />
      <meta property="og:description" content={t('retinole.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-retinole.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('retinole.badge')}</span>
          <h1 className={styles.heroTitle}>{t('retinole.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('retinole.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('retinole.metaRetinol')}</span>
            <span className={styles.metaPill}>50ml</span>
            <span className={styles.metaPill}>{t('retinole.metaNight')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=creme-retanol`} className={styles.ctaPrimary}>
            {t('retinole.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/bioverma-retinole.png"
              alt={t('retinole.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('retinole.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/bioverma-retinole.png"
                alt={t('retinole.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('retinole.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('retinole.specWeightLabel')}</span>
                <span className={styles.specValue}>50ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('retinole.specFormulaLabel')}</span>
                <span className={styles.specValue}>{t('retinole.specFormulaValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('retinole.specUseLabel')}</span>
                <span className={styles.specValue}>{t('retinole.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('retinole.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('retinole.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('retinole.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('retinole.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('retinole.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('retinole.feature1Title')}</strong> — {t('retinole.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌙</span>
            <div>
              <strong>{t('retinole.feature2Title')}</strong> — {t('retinole.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('retinole.feature3Title')}</strong> — {t('retinole.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌿</span>
            <div>
              <strong>{t('retinole.feature4Title')}</strong> — {t('retinole.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('retinole.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('retinole.benefit1Title')}</h3>
            <p>{t('retinole.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('retinole.benefit2Title')}</h3>
            <p>{t('retinole.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('retinole.benefit3Title')}</h3>
            <p>{t('retinole.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('retinole.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('retinole.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('retinole.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('retinole.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('retinole.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('retinole.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('retinole.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('retinole.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('retinole.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('retinole.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('retinole.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('retinole.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('retinole.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('retinole.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=creme-retanol`} className={styles.ctaPrimary}>
          {t('retinole.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
