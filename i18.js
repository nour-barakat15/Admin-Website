// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locales } from './next-i18next.config';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en', // Default language
    resources: {
      en: {
        common: require('./public/locales/en/common.json'),
      },
      tr: {
        common: require('./public/locales/tr/common.json'),
      },
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
