import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './CategoryCard.module.css';

export function CategoryCard({ slug, label, description, imageSrc }) {
  return (
    <Link
      to={ROUTES.category(slug)}
      className={styles.card}
      aria-label={label}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={label}
          className={styles.image}
          loading="lazy"
        />
      )}
      <h3 className={styles.title}>{label}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      <span className={styles.cta}>Shop →</span>
    </Link>
  );
}
