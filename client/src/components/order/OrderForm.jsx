import { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { createOrder } from "../../services/orderService";
import { PRODUCTS } from "../../constants/categories";
import styles from "./OrderForm.module.css";

export function OrderForm({ onSuccess, sku, preset, productName, image }) {
  const t = useTranslation();
  const product_price = PRODUCTS.find((p) => p.sku === sku).price;

  const [formData, setFormData] = useState({
    date_order: "",
    full_name: "",
    phone: "",
    address: "",
    sku: sku || "",
    qte: 1,
    price: Number(product_price),
    note: "",
  });


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // { field, message }

  // ✅ auto set date + sku
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      sku: sku || prev.sku,
    }));
  }, [sku]);

  // tier cards on the landing page set quantity + matching bundle price
  useEffect(() => {
    if (!preset) return;
    const pr = PRODUCTS.find((p) => p.sku === sku);
    const price = preset.qty === 1 ? pr.price : pr[`price${preset.qty}`] || pr.price * preset.qty;
    setFormData((prev) => ({ ...prev, qte: preset.qty, price }));
  }, [preset]);

  function quantityChange(e) {
    const value = e.target.value;
    const price2 = PRODUCTS.find((p) => p.sku === sku).price2
    const price3 = PRODUCTS.find((p) => p.sku === sku).price3
    if (value == 2 && price2) {
      setFormData((prev) => ({
        ...prev,
        price: price2,
      }));
    } else if (value == 3 && price3) {
      setFormData((prev) => ({
        ...prev,
        price: price3,
      }));
    } else {
      setFormData((prev) => ({
      ...prev,
      price: product_price * prev.qte,
    }));
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (error?.field === name) setError(null);

    setFormData((prev) => ({
      ...prev,
      [name]: name === "qte" ? Number(value) : value,
    }));
  }

  function validateForm(phone) {
    if (!formData.full_name.trim()) return { field: "full_name", message: t("order.requiredFullName") };
    if (!phone) return { field: "phone", message: t("order.requiredPhone") };
    if (!/^(06|07|\+2126|\+2127)\d{8}$/.test(phone)) return { field: "phone", message: t("order.invalidPhoneNumber") };
    if (!formData.address.trim()) return { field: "address", message: t("order.requiredAddress") };
    if (!formData.sku.trim()) return { field: "full_name", message: t("order.requiredSku") };
    if (!formData.qte || formData.qte <= 0) return { field: "qte", message: t("order.invalidQuantity") };
    if (!formData.price || formData.price <= 0) return { field: "qte", message: t("order.invalidPrice") };
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const phone = formData.phone.replace(/[\s.-]/g, "");
    const validationError = validateForm(phone);
    if (validationError) {
      setError(validationError);
      document.getElementById(`of-${validationError.field}`)?.focus();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createOrder({ ...formData, phone });
      onSuccess();
    } catch (err) {
      setError({ field: null, message: err.message || t("order.errorBox") });
    } finally {
      setLoading(false);
    }
  }

  const err = (name) => (error?.field === name ? error.message : "");
  const fieldProps = (name) => ({
    id: `of-${name}`,
    name,
    value: formData[name],
    onChange: handleChange,
    "aria-invalid": err(name) ? true : undefined,
    "aria-describedby": err(name) ? `of-${name}-err` : undefined,
  });
  const fieldError = (name) =>
    err(name) && (
      <p className={styles.fieldError} id={`of-${name}-err`} role="alert">{err(name)}</p>
    );

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.summary} aria-live="polite">
        {image && <img src={image} alt="" className={styles.thumb} />}
        <div className={styles.summaryText}>
          <strong>{productName}</strong>
          <span>{t("order.quantityLabel").replace(" *", "")} : {formData.qte}</span>
        </div>
        <div className={styles.summaryTotal}>
          <span>{t("orderLanding.total")}</span>
          <strong>{formData.price} {t("orderLanding.currency")}</strong>
        </div>
      </div>

      {error && !error.field && (
        <div className={styles.errorBox} role="alert">{error.message}</div>
      )}

      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="of-full_name">{t("order.fullNameLabel")}</label>
          <div className={styles.control}>
            <Icon d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
            <input type="text" autoComplete="name" enterKeyHint="next"
              placeholder={t("order.fullNamePlaceholder")} {...fieldProps("full_name")} />
          </div>
          {fieldError("full_name")}
        </div>

        <div className={styles.field}>
          <label htmlFor="of-phone">{t("order.phoneLabel")}</label>
          <div className={styles.control}>
            <Icon d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            <input type="tel" inputMode="tel" autoComplete="tel" enterKeyHint="next" dir="ltr"
              placeholder={t("order.phonePlaceholder")} {...fieldProps("phone")} />
          </div>
          {fieldError("phone")}
        </div>

        <div className={styles.field}>
          <label htmlFor="of-address">{t("order.addressLabel")}</label>
          <div className={styles.control}>
            <Icon d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            <input type="text" autoComplete="street-address" enterKeyHint="next"
              placeholder={t("order.addressPlaceholder")} {...fieldProps("address")} />
          </div>
          {fieldError("address")}
        </div>

        <div className={`${styles.field} ${styles.qty}`}>
          <label htmlFor="of-qte">{t("order.quantityLabel")}</label>
          <div className={styles.control}>
            <input type="number" inputMode="numeric" min="1" {...fieldProps("qte")}
              onChange={(e) => { handleChange(e); quantityChange(e); }} />
          </div>
          {fieldError("qte")}
        </div>

        <div className={`${styles.field} ${styles.wide}`}>
          <label htmlFor="of-note">{t("order.noteLabel")}</label>
          <div className={styles.control}>
            <textarea rows="2" placeholder={t("order.notePlaceholder")} {...fieldProps("note")} />
          </div>
        </div>
      </div>

      <button className={styles.button} disabled={loading} aria-busy={loading}>
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        <span>{loading ? t("order.sendingButton") : `${t("order.submitButton")} · ${formData.price} ${t("orderLanding.currency")}`}</span>
      </button>
      <p className={styles.secure}>{t("orderLanding.secureNote")}</p>
    </form>
  );
}

function Icon({ d }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
  );
}
