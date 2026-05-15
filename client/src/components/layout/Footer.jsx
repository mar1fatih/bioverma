import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { ROUTES } from '../../constants/routes';
import { CATEGORIES } from '../../constants/categories';
import styles from './Footer.module.css';

export function Footer() {
  const t = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link to={ROUTES.HOME} className={styles.logoLink}>
            <img src="/logo.png" alt="Bioverma" className={styles.logoImage} />
          </Link>
          <p className={styles.tagline}>{t('footer.tagline')}</p>

          <div className={styles.social}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/bioverma_prod/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.socialIcon}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@bioverma_prod"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>
            <a
              href="mailto:contact.bioverma@gmail.com"
              className={styles.socialLink}
              aria-label="Gmail"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.heading}>{t('footer.links')}</h3>
          <ul className={styles.links}>
            <li>
              <Link to={ROUTES.HOME}>{t('nav.home')}</Link>
            </li>
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link to={ROUTES.category(cat.slug)}>
                  {t(`nav.${cat.id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.heading}>{t('footer.legal')}</h3>
          <ul className={styles.links}>
            <li><a href="#contact">{t('common.contact')}</a></li>
            <li><a href="#about">{t('common.about')}</a></li>
            <li><a href="#faq">{t('common.faq')}</a></li>
            <li><a href="#shipping">{t('common.shipping')}</a></li>
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.heading}>{t('footer.newsletter')}</h3>
          <form className={styles.newsletter} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="email@example.com"
              className={styles.input}
              aria-label="Email"
            />
            <button type="submit" className={styles.submit}>
              {t('footer.subscribe')}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Bioverma. {t('common.allRightsReserved')}
        </p>
      </div>
    </footer>
  );
}