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
        </div>

        <div className={styles.block}>
          <h3 className={styles.heading}>{t('footer.links')}</h3>
          <ul className={styles.links}>
            <li>
              <Link to={ROUTES.HOME}>{t('nav.home')}</Link>
            </li>
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link to={ROUTES.category(cat.slug)}>{t(`nav.${cat.id}`)}</Link>
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
        <p className={styles.copyright}>© {new Date().getFullYear()} Bioverma. {t('common.allRightsReserved')}</p>
      </div>
    </footer>
  );
}
