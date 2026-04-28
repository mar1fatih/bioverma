import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { SUPPORTED_LOCALES } from '../../config/i18n';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const t = useTranslation();
  const localeLabels = {
    ar: t('common.arabic'),
    fr: t('common.french'),
  };

  return (
    <div className={styles.wrapper} role="group" aria-label={t('common.language')}>
      {SUPPORTED_LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          className={locale === loc ? styles.active : styles.btn}
          onClick={() => setLocale(loc)}
          aria-pressed={locale === loc}
          aria-label={localeLabels[loc] ?? loc.toUpperCase()}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
