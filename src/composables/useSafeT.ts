import { useI18n } from 'vue-i18n';

export const useSafeT = () => {
  const { t, te } = useI18n();

  const safeT = (key: string, fallback: string) => {
    return te(key) ? t(key) : fallback;
  };

  return { safeT };
};
