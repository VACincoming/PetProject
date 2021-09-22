import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { authEn, createEn } from 'locales/en'
import { authRu, createRu } from 'locales/ru'
import { authUa, createUa } from 'locales/ua'

const resources = {
  en: { 
        auth: authEn,
        create: createEn
    },
  ru: {
        auth: authRu,
        create: createRu
    },
  ua: { 
        auth: authUa,
        create: createUa
    }
};

const languages = ["en", "ru", "ua"];

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    defaultNS: "auth",
    whitelist: languages,
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
        useSuspense: false
    }
  });


export default i18n;