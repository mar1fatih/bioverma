import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { OrderForm } from "../components/order/OrderForm";
import styles from "./OrderPage.module.css";

export function OrderPage() {
  const t = useTranslation();
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();

  const sku = searchParams.get("sku") || "";

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("order.title")}</h1>
        <p className={styles.subtitle}>{t("order.subtitle")}</p>

        {success ? (
          <div className={styles.successBox}>{t("order.successBox")}</div>
        ) : (
          <OrderForm sku={sku} onSuccess={() => setSuccess(true)} />
        )}
      </div>
    </div>
  );
}