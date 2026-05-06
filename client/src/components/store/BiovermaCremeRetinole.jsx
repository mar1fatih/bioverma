import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './Products.module.css';


export function BiovermaCremeRetinole() {
    const t = useTranslation();

    return(
          <Link to={ROUTES.RETINOLE} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-retinole.png"
                alt={t('retinole.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct3Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct3Text')}</p>
              <span className={styles.productCta}>{t('home.featuredProduct3Cta')}</span>
            </div>
          </Link>
    );
}