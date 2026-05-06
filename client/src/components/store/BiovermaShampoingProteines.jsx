import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './Products.module.css';


export function BiovermaShampoingProteines() {
    const t = useTranslation();

    return(
          <Link to={ROUTES.PROTEINES} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-proteines.png"
                alt={t('proteines.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct4Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct4Text')}</p>
              <span className={styles.productCta}>{t('home.featuredProduct4Cta')}</span>
            </div>
          </Link>
    );
}