import { createI18n } from 'vue-i18n';

import enUS from './locales/en-US';
import esMX from './locales/es-MX';

type MessageSchema = typeof enUS;

export const i18n = createI18n<[MessageSchema], 'en-US' | 'es-MX'>({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'es-MX': esMX
  }
});
