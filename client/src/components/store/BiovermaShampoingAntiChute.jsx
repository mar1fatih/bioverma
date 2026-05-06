import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './Products.module.css';


export function BiovermaShampoingAntiChute() {
    const t = useTranslation();

    return(
          <Link to={ROUTES.ANTICHUTE} className={styles.productCard}>
            <div className={styles.productImageWrap}>
              <img
                src="/bioverma-anti-chute.png"
                alt={t('antiChute.productAlt')}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productBody}>
              <h3 className={styles.productTitle}>{t('home.featuredProduct2Name')}</h3>
              <p className={styles.productText}>{t('home.featuredProduct2Text')}</p>
              <span className={styles.productCta}>{t('home.featuredProduct2Cta')}</span>
            </div>
          </Link>
    );
}