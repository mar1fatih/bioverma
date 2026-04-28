import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ROUTES } from '../../constants/routes';
import { CATEGORIES } from '../../constants/categories';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './Header.module.css';

export function Header() {
  const t = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: ROUTES.HOME, label: t('nav.home') },
    ...CATEGORIES.map((cat) => ({
      to: ROUTES.category(cat.slug),
      label: t(`nav.${cat.id}`),
    })),
  ];

  return (
    <header className={styles.header}>
      {/* Mobile: overlay behind side panel */}
      {menuOpen && (
        <button
          type="button"
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
      <div className={styles.inner}>
        <Link to={ROUTES.HOME} className={styles.logo} aria-label={t('nav.home')}>
          <img src="/logo.png" alt="Bioverma" className={styles.logoImage} />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={
                    location.pathname === item.to
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
            <span className={styles.menuIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}
