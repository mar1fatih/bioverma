import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { useTranslation } from '../hooks/useTranslation';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  const t = useTranslation();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>{t('notFound.message')}</p>
      <Link to={ROUTES.HOME} className={styles.link}>
        {t('notFound.backToHome')}
      </Link>
    </div>
  );
}
