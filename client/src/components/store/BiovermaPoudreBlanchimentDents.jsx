import { useTranslation } from '../../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import styles from './Products.module.css';


export function BiovermaPoudreBlanchimentDents() {
    const t = useTranslation();

    return(
        <Link to={ROUTES.BIOVERMA} className={styles.productCard}>
            <div className={styles.productImageWrap}>
                <img
                src="/bioverma-product.png"
                alt={t('bioverma.productAlt')}
                className={styles.productImage}
                />
            </div>
            <div className={styles.productBody}>
                <h3 className={styles.productTitle}>{t('home.featuredProductName')}</h3>
                <p className={styles.productText}>{t('home.featuredProductText')}</p>
                <span className={styles.productCta}>{t('home.featuredProductCta')}</span>
            </div>
        </Link>
    );
}