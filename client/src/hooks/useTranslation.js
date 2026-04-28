import { useLanguage } from '../context/LanguageContext';

/**
 * Returns the translation function. Use as: t('nav.home') => "Home" or "Accueil"
 */
export function useTranslation() {
  const { t } = useLanguage();
  return t;
}
