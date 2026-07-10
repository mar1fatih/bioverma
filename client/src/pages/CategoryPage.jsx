import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Helmet } from 'react-helmet-async';
import { ROUTES } from '../constants/routes';
import { CATEGORIES } from '../constants/categories';
import { PRODUCT_CATEGORIES } from '../constants/categories';
import styles from './CategoryPage.module.css';
import { NotFoundPage } from '../pages/NotFoundPage';
import { BiovermaPoudreBlanchimentDents } from '../components/store/BiovermaPoudreBlanchimentDents';
import { BiovermaShampoingAntiChute } from '../components/store/BiovermaShampoingAntiChute';
import { BiovermaCremeRetinole } from '../components/store/BiovermaCremeRetinole';
import { BiovermaShampoingProteines } from '../components/store/BiovermaShampoingProteines';


export function CategoryPage() {
  const { slug } = useParams();
  const t = useTranslation();

  const prod = [
    {
      name: 'bioverma-shampoing-anti-chute',
      object: <BiovermaShampoingAntiChute />
    },
    {
      name: 'bioverma-shampoing-proteines', 
      object: <BiovermaShampoingProteines />
    },
    {
      name: 'bioverma-creme-retinole',
      object: <BiovermaCremeRetinole />
    },
    {
      name: 'bioverma-poudre-blanchiment-dents',
      object: <BiovermaPoudreBlanchimentDents />
    },
  ]

  const category = CATEGORIES.find((c) => c.slug === slug);
  const categoryName = category ? t(`nav.${category.id}`) : slug;
  const products = (PRODUCT_CATEGORIES.find((p) => p.category === slug)).products;

  const seoTitle = t(`seo.${slug}-title`);
  const seoDesc = t(`seo.${slug}-desc`);
  const canonicalUrl = `https://bioverma.netlify.app/${ROUTES.category(slug)}`;

  return (
  <>
    {category ? (
      <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Social Media Share Previews */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to={ROUTES.HOME} className={styles.breadcrumbLink}>
          {t('nav.home')}
        </Link>
        <span className={styles.breadcrumbSep} aria-hidden>/</span>
        <span className={styles.breadcrumbCurrent}>{categoryName}</span>
      </nav>

      <h1 className={styles.title}>{categoryName}</h1>
      <div className={styles.productGrid}>
      { products.length > 0 ? (products.map((p) => prod.find((pr) => pr.name === p).object)) : (<p className={styles.empty}>{t('category.noProducts')}</p>)}
      </div>
      <Link to={ROUTES.HOME} className={styles.backLink}>
        {t('category.backToHome')}
      </Link>
      </div>
      </>) : (<NotFoundPage/>)}
  </>
  );
}
