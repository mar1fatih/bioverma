import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function ProteinesPage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('proteines.badge')} | Bioverma`}</title>
      <meta name="description" content={t('proteines.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/shampoing-proteines" />
      
      <meta property="og:title" content={`${t('proteines.badge')} | Bioverma`} />
      <meta property="og:description" content={t('proteines.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-proteines.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('proteines.badge')}</span>
          <h1 className={styles.heroTitle}>{t('proteines.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('proteines.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('proteines.metaProtein')}</span>
            <span className={styles.metaPill}>150ml</span>
            <span className={styles.metaPill}>{t('proteines.metaDaily')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=shampoing-proteine`} className={styles.ctaPrimary}>
            {t('proteines.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/bioverma-proteines.png"
              alt={t('proteines.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('proteines.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/bioverma-proteines.png"
                alt={t('proteines.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('proteines.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('proteines.specWeightLabel')}</span>
                <span className={styles.specValue}>150ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('proteines.specFormulaLabel')}</span>
                <span className={styles.specValue}>{t('proteines.specFormulaValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('proteines.specUseLabel')}</span>
                <span className={styles.specValue}>{t('proteines.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('proteines.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('proteines.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('proteines.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('proteines.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('proteines.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💪</span>
            <div>
              <strong>{t('proteines.feature1Title')}</strong> — {t('proteines.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('proteines.feature2Title')}</strong> — {t('proteines.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('proteines.feature3Title')}</strong> — {t('proteines.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌿</span>
            <div>
              <strong>{t('proteines.feature4Title')}</strong> — {t('proteines.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('proteines.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('proteines.benefit1Title')}</h3>
            <p>{t('proteines.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('proteines.benefit2Title')}</h3>
            <p>{t('proteines.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('proteines.benefit3Title')}</h3>
            <p>{t('proteines.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('proteines.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('proteines.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('proteines.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('proteines.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('proteines.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('proteines.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('proteines.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('proteines.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('proteines.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('proteines.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('proteines.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('proteines.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('proteines.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('proteines.finalText')}</p>
          <Link to={`${ROUTES.ORDER}?sku=shampoing-proteine`} className={styles.ctaPrimary}>
          {t('proteines.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
