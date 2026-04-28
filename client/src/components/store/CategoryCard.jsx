import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './CategoryCard.module.css';

const ICONS = {
  nutrition: '🥗',
  'skin-care': '✨',
  'make-up': '💄',
  parfum: '🌸',
  body: '🧴',
};

export function CategoryCard({ slug, label, description }) {
  const icon = ICONS[slug] ?? '📦';

  return (
    <Link
      to={ROUTES.category(slug)}
      className={styles.card}
      aria-label={label}
    >
      <span className={styles.icon} role="img" aria-hidden>
        {icon}
      </span>
      <h3 className={styles.title}>{label}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      <span className={styles.cta}>Shop →</span>
    </Link>
  );
}
