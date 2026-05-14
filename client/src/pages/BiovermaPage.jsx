import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function BiovermaPage() {
  const t = useTranslation();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('bioverma.badge')}</span>
          <h1 className={styles.heroTitle}>{t('bioverma.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('bioverma.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('bioverma.metaNatural')}</span>
            <span className={styles.metaPill}>50g</span>
            <span className={styles.metaPill}>{t('bioverma.metaDaily')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=poudre-dents`} className={styles.ctaPrimary}>
            {t('bioverma.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/bioverma-product.png"
              alt={t('bioverma.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('bioverma.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/bioverma-product.png"
                alt={t('bioverma.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('bioverma.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('bioverma.specWeightLabel')}</span>
                <span className={styles.specValue}>50g</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('bioverma.specFormulaLabel')}</span>
                <span className={styles.specValue}>{t('bioverma.specFormulaValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('bioverma.specUseLabel')}</span>
                <span className={styles.specValue}>{t('bioverma.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('bioverma.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('bioverma.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('bioverma.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('bioverma.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('bioverma.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('bioverma.feature1Title')}</strong> — {t('bioverma.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌿</span>
            <div>
              <strong>{t('bioverma.feature2Title')}</strong> — {t('bioverma.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>⚡</span>
            <div>
              <strong>{t('bioverma.feature3Title')}</strong> — {t('bioverma.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💰</span>
            <div>
              <strong>{t('bioverma.feature4Title')}</strong> — {t('bioverma.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('bioverma.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('bioverma.benefit1Title')}</h3>
            <p>{t('bioverma.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('bioverma.benefit2Title')}</h3>
            <p>{t('bioverma.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('bioverma.benefit3Title')}</h3>
            <p>{t('bioverma.benefit3Text')}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('bioverma.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('bioverma.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('bioverma.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('bioverma.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('bioverma.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('bioverma.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('bioverma.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('bioverma.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('bioverma.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('bioverma.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('bioverma.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('bioverma.faq3A')}</dd>
          </div>
        </dl>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('bioverma.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('bioverma.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=poudre-dents`} className={styles.ctaPrimary}>
          {t('bioverma.cta')}
        </Link>
      </section>
    </div>
  );
}
