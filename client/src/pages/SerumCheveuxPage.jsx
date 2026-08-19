import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import styles from './BiovermaPage.module.css';

export function SerumCheveuxPage() {
  const t = useTranslation();

  return (
    <>
    <Helmet>
      <title>{`${t('serumCheveux.badge')} | Bioverma`}</title>
      <meta name="description" content={t('serumCheveux.heroSubtitle')} />
      <link rel="canonical" href="https://bioverma.netlify.app/product/serum-hydratant-cheveux" />

      <meta property="og:title" content={`${t('serumCheveux.badge')} | Bioverma`} />
      <meta property="og:description" content={t('serumCheveux.heroSubtitle')} />
      <meta property="og:image" content="https://bioverma.netlify.app/bioverma-serum-cheveux.png" />
    </Helmet>
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{t('serumCheveux.badge')}</span>
          <h1 className={styles.heroTitle}>{t('serumCheveux.heroTitle')}</h1>
          <p className={styles.heroSubheading}>{t('serumCheveux.heroSubtitle')}</p>
          <div className={styles.heroMeta}>
            <span className={styles.metaPill}>{t('serumCheveux.metaNatural')}</span>
            <span className={styles.metaPill}>100ml</span>
            <span className={styles.metaPill}>{t('serumCheveux.metaAllHair')}</span>
          </div>
          <Link to={`${ROUTES.ORDER}?sku=serum-cheveux`} className={styles.ctaPrimary}>
            {t('serumCheveux.cta')}
          </Link>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.productCard}>
            <img
              src="/serum-hydratante.png"
              alt={t('serumCheveux.productAlt')}
              className={styles.productImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumCheveux.galleryTitle')}</h2>
        <div className={styles.galleryLayout}>
          <div className={styles.galleryMain}>
            <div className={styles.zoomFrame}>
              <img
                src="/serum-hydratante.png"
                alt={t('serumCheveux.galleryAlt')}
                className={styles.zoomImage}
              />
            </div>
          </div>

          <div className={styles.galleryInfo}>
            <h3 className={styles.galleryTitle}>{t('serumCheveux.quickDetails')}</h3>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumCheveux.specWeightLabel')}</span>
                <span className={styles.specValue}>100ml</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumCheveux.specFormulaLabel')}</span>
                <span className={styles.specValue}>{t('serumCheveux.specFormulaValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumCheveux.specUseLabel')}</span>
                <span className={styles.specValue}>{t('serumCheveux.specUseValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumCheveux.specTypeLabel')}</span>
                <span className={styles.specValue}>{t('serumCheveux.specTypeValue')}</span>
              </li>
              <li className={styles.specItem}>
                <span className={styles.specLabel}>{t('serumCheveux.specPriceLabel')}</span>
                <span className={styles.specValue}>{t('serumCheveux.specPriceValue')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumCheveux.featuresTitle')}</h2>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>💧</span>
            <div>
              <strong>{t('serumCheveux.feature1Title')}</strong> — {t('serumCheveux.feature1Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🌱</span>
            <div>
              <strong>{t('serumCheveux.feature2Title')}</strong> — {t('serumCheveux.feature2Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>✨</span>
            <div>
              <strong>{t('serumCheveux.feature3Title')}</strong> — {t('serumCheveux.feature3Text')}
            </div>
          </li>
          <li className={styles.featureItem}>
            <span className={styles.featureIcon} aria-hidden>🍃</span>
            <div>
              <strong>{t('serumCheveux.feature4Title')}</strong> — {t('serumCheveux.feature4Text')}
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumCheveux.benefitsTitle')}</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>١</span>
            <h3 className={styles.benefitTitle}>{t('serumCheveux.benefit1Title')}</h3>
            <p>{t('serumCheveux.benefit1Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٢</span>
            <h3 className={styles.benefitTitle}>{t('serumCheveux.benefit2Title')}</h3>
            <p>{t('serumCheveux.benefit2Text')}</p>
          </div>
          <div className={styles.benefitCard}>
            <span className={styles.benefitNumber}>٣</span>
            <h3 className={styles.benefitTitle}>{t('serumCheveux.benefit3Title')}</h3>
            <p>{t('serumCheveux.benefit3Text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumCheveux.testimonialsTitle')}</h2>
        <div className={styles.testimonials}>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('serumCheveux.review1Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('serumCheveux.review1Author')}</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>"{t('serumCheveux.review2Text')}"</p>
            <footer className={styles.testimonialAuthor}>— {t('serumCheveux.review2Author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('serumCheveux.faqTitle')}</h2>
        <dl className={styles.faqList}>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('serumCheveux.faq1Q')}</dt>
            <dd className={styles.faqAnswer}>{t('serumCheveux.faq1A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('serumCheveux.faq2Q')}</dt>
            <dd className={styles.faqAnswer}>{t('serumCheveux.faq2A')}</dd>
          </div>
          <div className={styles.faqItem}>
            <dt className={styles.faqQuestion}>{t('serumCheveux.faq3Q')}</dt>
            <dd className={styles.faqAnswer}>{t('serumCheveux.faq3A')}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{t('serumCheveux.finalTitle')}</h2>
        <p className={styles.finalCtaSubtext}>{t('serumCheveux.finalText')}</p>
        <Link to={`${ROUTES.ORDER}?sku=serum-cheveux`} className={styles.ctaPrimary}>
          {t('serumCheveux.cta')}
        </Link>
      </section>
    </div>
    </>
  );
}
