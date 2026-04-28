import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { ROUTES } from '../constants/routes';
import { CATEGORIES } from '../constants/categories';
import styles from './CategoryPage.module.css';

export function CategoryPage() {
  const { slug } = useParams();
  const t = useTranslation();

  const category = CATEGORIES.find((c) => c.slug === slug);
  const categoryName = category ? t(`nav.${category.id}`) : slug;

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to={ROUTES.HOME} className={styles.breadcrumbLink}>
          {t('nav.home')}
        </Link>
        <span className={styles.breadcrumbSep} aria-hidden>/</span>
        <span className={styles.breadcrumbCurrent}>{categoryName}</span>
      </nav>

      <h1 className={styles.title}>{categoryName}</h1>
      <p className={styles.empty}>{t('category.noProducts')}</p>
      <Link to={ROUTES.HOME} className={styles.backLink}>
        {t('category.backToHome')}
      </Link>
    </div>
  );
}
