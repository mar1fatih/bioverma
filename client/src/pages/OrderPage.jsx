import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "../hooks/useTranslation";
import ScrollStack, { ScrollStackItem } from "../components/common/ScrollStack";
import { OrderForm } from "../components/order/OrderForm";
import { PRODUCTS } from "../constants/categories";
import { ROUTES } from "../constants/routes";
import styles from "./OrderPage.module.css";
import GhostFibers from '../components/layout/GhostFibers.jsx';
import ScrollVelocity from '../components/layout/ScrollVelocity.jsx';
import AnimatedButton from '../components/layout/AnimatedButton.jsx';
import { ArrowBigDownIcon } from '../components/layout/BigArrowAnimation.jsx';

const WHATSAPP = "https://wa.me/message/UHMODGM64BMZI1";

// sku -> product image, product page, and the translation namespace used by that product's page
const MEDIA = {
  "creme-retanol": { img: "/bioverma-retinole.png", page: ROUTES.RETINOLE, ns: "retinole" },
  "sham-anti-chute": { img: "/bioverma-anti-chute.png", page: ROUTES.ANTICHUTE, ns: "antiChute" },
  "shampoing-proteine": { img: "/bioverma-proteines.png", page: ROUTES.PROTEINES, ns: "proteines" },
  "poudre-dents": { img: "/bioverma-product.png", page: ROUTES.BIOVERMA, ns: "bioverma" },
  ecran_solaire: { img: "/ecran-solaire.png", page: ROUTES.ECRANSOLAIRE, ns: "cremeSolaire" },
  niacinamide: { img: "/serum-niacinamide.png", page: ROUTES.NIACINAMIDE, ns: "niacinamide" },
  "serum-retanol": { img: "/serum-retinol.png", page: ROUTES.SERUMRITANOL, ns: "serumRetinol" },
  "eclat-zone-intime": { img: "/eclat-zone-intime.png", page: ROUTES.INTIME, ns: "soinEclatSensible" },
  "serum-cheveux": { img: "/bioverma-serum-cheveux.png", page: ROUTES.HYDRATANT, ns: "serumCheveux" },
  "pack-pack-visage-5146": { img: "/pack_visage.png", page: ROUTES.HOME , ns: "packVisage" },
};

export function OrderPage() {
  const t = useTranslation();
  const [success, setSuccess] = useState(false);
  const [preset, setPreset] = useState(null);
  const [searchParams] = useSearchParams();
  const sku = searchParams.get("sku") || "";
  const product = PRODUCTS.find((p) => p.sku === sku);
  const media = MEDIA[sku];
  const ns = media?.ns;
  const name = product ? t(`orderLanding.names.${sku}`) : "";
  const L = (k) => t(`orderLanding.${k}`);

  if (!product) {
    return (
      <div className={styles.page}>
        <Helmet><title>{`${t("order.title")} | Bioverma`}</title></Helmet>
        <div className={styles.container}>
          <h1 className={styles.title}>{L("pickTitle")}</h1>
          <p className={styles.subtitle}>{L("pickSubtitle")}</p>
          <div className={styles.picker}>
            {PRODUCTS.map((p) => (
              <Link key={p.sku} to={`${ROUTES.ORDER}?sku=${p.sku}`} className={styles.pickCard}>
                <img src={MEDIA[p.sku]?.img} alt="" loading="lazy" />
                <span className={styles.pickName}>{t(`orderLanding.names.${p.sku}`)}</span>
                <span className={styles.pickPrice}>{p.price} {L("currency")}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const tiers = [1, 2, 3]
    .map((n) => ({ n, total: n === 1 ? product.price : product[`price${n}`] }))
    .filter((x) => x.total)
    .map((x) => ({ ...x, save: product.price * x.n - x.total, unit: Math.round(x.total / x.n) }));
  const bestUnit = Math.min(...tiers.map((x) => x.unit));
  const selected = preset?.qty || 1;
  const headline = ns ? t(`${ns}.heroTitle`) : `${L("genericTitle")}`;
  const sub = ns ? t(`${ns}.heroSubtitle`) : L("subtitle");
  const reviews = ns ? [1, 2].map((i) => [t(`${ns}.review${i}Text`), t(`${ns}.review${i}Author`)]) : [];

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{`${name} | ${t("order.title")} | Bioverma`}</title>
        <meta name="description" content={sub} />
        <meta property="og:title" content={`${name} | Bioverma`} />
        <meta property="og:description" content={sub} />
        <meta property="og:image" content={`https://bioverma.netlify.app${media?.img || "/logo.png"}`} />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <div style={{ width: '100%', height: '0px' }}>
          <GhostFibers
            lineColor="#0e3511"
            glowColor="#7ee06a"
            speed={0.2}
            scale={2}
            rotation={0}
            rotationSpeed={0.25}
            layers={4}
            waveAmplitude={0.015}
            waveFrequency={3}
            waveSpeed={0.15}
            layerSpeed={0.08}
            twist={0.1}
            twistFrequency={5}
            twistSpeed={1.2}
            lineFrequency={5}
            lineSpacing={2}
            lineSharpness={16}
            glowFalloff={10}
            glowIntensity={1.6}
            brightness={2}
            blueBoost={1.25}
            vignette={0.8}
            grain={0.05}
            dpr={1}
            lightMode={false}
            fps={60}
            paused={false}
          />
        </div>
          <span className={styles.badge}>{L("badge")}</span>
          <img style={{ position: 'relative', zIndex: 1 }} src={media?.img} alt={name} />
        </div>
        <div className={styles.heroText}>
          <span className={styles.kicker}>{name}</span>
          <h1 className={styles.heroTitle}>{headline}</h1>
          <p className={styles.heroSub}>{sub}</p>
          <div className={styles.priceRow}>
            <strong className={styles.bigPrice}>{product.price} {L("currency")}</strong>
            <span className={styles.chip}>{L("p2Title")}</span>
          </div>
          <a href="#order-form" className={styles.cta}>{L("cta")}</a>
          <a href={WHATSAPP} target="_blank" rel="noopener" className={styles.wa}>{L("whatsapp")}</a>
        </div>
      </section>

      <ul className={styles.trust}>
        {["p1", "p2", "p3"].map((k) => (
          <li key={k}><strong>{L(`${k}Title`)}</strong><span>{L(`${k}Text`)}</span></li>
        ))}
      </ul>

      <ScrollVelocity
        texts={[L("hookTitle"), L("hookTitle2")]} 
        velocity={100}
        className="custom-scroll-text"
        numCopies={5}
        damping={50}
        stiffness={400}
      />

      <section className={styles.formSection} id="order-form">
        <h2 className={styles.h2}>{L("chooseOffer")}</h2>
        {tiers.length > 1 && (
          <div className={styles.tiers} role="radiogroup" aria-label={L("chooseOffer")}>
            {tiers.map(({ n, total, save, unit }) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={selected === n}
                onClick={() => setPreset({ qty: n })}
                className={`${styles.tier} ${selected === n ? styles.tierOn : ""}`}
              >
                {n > 1 && unit === bestUnit && <span className={styles.tierTag}>{L("tierBest")}</span>}
                <span className={styles.tierQty}>{L(`qty${n}`)}</span>
                <strong className={styles.tierPrice}>{total} {L("currency")}</strong>
                <span className={styles.tierSave}>
                  {save > 0 ? `${L("save")} ${save} ${L("currency")}` : `${unit} ${L("currency")} ${L("perUnit")}`}
                </span>
              </button>
            ))}
          </div>
        )}
        <p className={styles.formNote}>{L("formNote")}</p>
        <div className={styles.formNote}>
          <ArrowBigDownIcon />
        </div>
        {success ? (
          <div className={styles.successBox} role="status">
            <svg viewBox="0 0 52 52" width="64" height="64" aria-hidden="true">
              <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M15 27l8 8 15-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>{L("successTitle")}</h3>
            <p>{L("successText")}</p>
            <Link to={ROUTES.HOME} className={styles.cta}>{L("backToShop")}</Link>
          </div>
        ) : (
          <OrderForm sku={sku} preset={preset} productName={name} image={media?.img} onSuccess={() => setSuccess(true)} />
        )}
      </section>

      {ns && (
        <section className={styles.block}>
          <h2 className={styles.h2}>{L("benefitsTitle")}</h2>
          <ScrollStack itemDistance={48} itemStackDistance={0}>
            {[1, 2, 3].map((i) => (
              <ScrollStackItem key={i} itemClassName={`${styles.benefit} ${styles[`benefit${i}`]}`}>
                <span className={styles.stepN}>{i}</span>
                <h3>{t(`${ns}.benefit${i}Title`)}</h3>
                <p>{t(`${ns}.benefit${i}Text`)}</p>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </section>
      )}

      {reviews.length > 0 && (
        <section className={styles.block}>
          <h2 className={styles.h2}>{L("reviewsTitle")}</h2>
          <div className={styles.reviews}>
            {reviews.map(([text, author]) => (
              <figure key={author} className={styles.review}>
                <blockquote>{text}</blockquote>
                <figcaption>{author}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className={styles.steps}>
        <h2 className={styles.h2}>{L("stepsTitle")}</h2>
        <ol>
          {["s1", "s2", "s3"].map((k, i) => (
            <li key={k}>
              <span className={styles.stepN}>{i + 1}</span>
              <div><h3>{L(`${k}Title`)}</h3><p>{L(`${k}Text`)}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.faq}>
        <h2 className={styles.h2}>{L("faqTitle")}</h2>
        {["f1", "f2", "f3"].map((k) => (
          <details key={k}><summary>{L(`${k}Q`)}</summary><p>{L(`${k}A`)}</p></details>
        ))}
      </section>

      {!success && (
        <div className={styles.sticky}>
          <div><span>{name}</span><strong>{L("from")} {product.price} {L("currency")}</strong></div>
          <AnimatedButton />
        </div>
      )}
    </div>
  );
}
