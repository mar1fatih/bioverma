import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function AntiChutePage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('antiChute.badge')} | Bioverma`}</title>
      <meta name="description" content={t('antiChute.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/bioverma-shampoing-anti-chute" />
      
      <meta property="og:title" content={`${t('antiChute.badge')} | Bioverma`} />
      <meta property="og:description" content={t('antiChute.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-anti-chute.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('antiChute.badge')}</span>
          <h1 className={styles.heroTitle}>{t('antiChute.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('antiChute.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('antiChute.metaB5')}</span>
            <span className={styles.metaPill}>150ml</span>
            <span className={styles.metaPill}>{t('antiChute.metaDaily')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=sham-anti-chute`} className={styles.ctaPrimary}>
            {t('antiChute.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/bioverma-anti-chute.png"
              alt={t('antiChute.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('antiChute.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/bioverma-anti-chute.png"
                alt={t('antiChute.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('antiChute.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('antiChute.specWeightLabel')}</span>
                <span className={styles.specValue}>150ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('antiChute.specFormulaLabel')}</span>
                <span className={styles.specValue}>{t('antiChute.specFormulaValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('antiChute.specUseLabel')}</span>
                <span className={styles.specValue}>{t('antiChute.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('antiChute.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('antiChute.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('antiChute.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('antiChute.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('antiChute.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌱</span>
            <div>
              <strong>{t('antiChute.feature1Title')}</strong> — {t('antiChute.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('antiChute.feature2Title')}</strong> — {t('antiChute.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>⚡</span>
            <div>
              <strong>{t('antiChute.feature3Title')}</strong> — {t('antiChute.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💚</span>
            <div>
              <strong>{t('antiChute.feature4Title')}</strong> — {t('antiChute.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('antiChute.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('antiChute.benefit1Title')}</h3>
            <p>{t('antiChute.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('antiChute.benefit2Title')}</h3>
            <p>{t('antiChute.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('antiChute.benefit3Title')}</h3>
            <p>{t('antiChute.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('antiChute.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('antiChute.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('antiChute.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('antiChute.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('antiChute.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('antiChute.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('antiChute.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('antiChute.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('antiChute.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('antiChute.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('antiChute.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('antiChute.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('antiChute.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('antiChute.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=sham-anti-chute`} className={styles.ctaPrimary}>
          {t('antiChute.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
