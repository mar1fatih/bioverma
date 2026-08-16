import { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { createOrder } from "../../services/orderService";
import { PRODUCTS } from "../../constants/categories";
import styles from "./OrderForm.module.css";

export function OrderForm({ onSuccess, sku }) {
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
  const [error, setError] = useState("");

  // ✅ auto set date + sku
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      sku: sku || prev.sku,
    }));
  }, [sku]);

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

    setFormData((prev) => ({
      ...prev,
      [name]: name === "qte" ? Number(value) : value,
    }));
  }

  function validateForm() {
    if (!formData.full_name.trim()) return t("order.requiredFullName");
    if (!formData.phone.trim()) return t("order.requiredPhone");
    if (!/^(06|07|\+2126|\+2127)\d{8}$/.test(formData.phone)) return t("order.invalidPhoneNumber");
    if (!formData.sku.trim()) return t("order.requiredSku");
    if (!formData.qte || formData.qte <= 0) return t("order.invalidQuantity");
    if (!formData.price || formData.price <= 0) return t("order.invalidPrice");
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      await createOrder(formData);
      onSuccess();
    } catch (err) {
      setError(err.message || t("order.errorBox"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.errorBox}>❌ {error}</div>}

      <div className={styles.grid}>
        <div className={styles.field}>
          <label>{t('order.fullNameLabel')}</label>
          <input
            type="text"
            name="full_name"
            placeholder={t("order.fullNamePlaceholder")}
            value={formData.full_name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label>{t("order.phoneLabel")}</label>
          <input
            type="tel"
            name="phone"
            placeholder={t("order.phonePlaceholder")}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* ✅ Address optional */}
        <div className={styles.field}>
          <label>{t("order.addressLabel")}</label>
          <input
            type="text"
            name="address"
            placeholder={t("order.addressPlaceholder")}
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* SKU auto-filled */}
        <div className={styles.field}>
          <label>{t("order.skuLabel")}</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            readOnly
          />
        </div>

        <div className={styles.field}>
          <label>{t("order.quantityLabel")}</label>
          <input
            type="number"
            name="qte"
            min="1"
            value={formData.qte}
            onChange={(e) => {
              handleChange(e);
              quantityChange(e);
            }}
          />
        </div>
        <div className={styles.field}>
          <label>{t("order.priceLabel")}</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            readOnly
          />
        </div>
      </div>


      <div className={styles.field}>
        <label>{t("order.noteLabel")}</label>
        <textarea
          name="note"
          placeholder={t("order.notePlaceholder")}
          value={formData.note}
          onChange={handleChange}
        />
      </div>

      <button className={styles.button} disabled={loading}>
        {loading ? t("order.sendingButton") : t("order.submitButton")}
      </button>
    </form>
  );
}