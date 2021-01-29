import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import authEn from 'locales/en/auth.json'
import authRu from 'locales/ru/auth.json'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const resources = {
  en: { auth: authEn },
  ru: { auth: authRu }
};

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    defaultNS: "auth",
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;