import { CategoryCard } from './CategoryCard';
import { CATEGORIES } from '../../constants/categories';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './CategoryGrid.module.css';

export function CategoryGrid() {
  const t = useTranslation();

  return (
    <div className={styles.grid}>
      {CATEGORIES.map((cat) => (
        <CategoryCard
          key={cat.slug}
          slug={cat.slug}
          label={t(`nav.${cat.id}`)}
        />
      ))}
    </div>
  );
}
