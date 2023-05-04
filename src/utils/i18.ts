import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // lng: "fr", // if you're using a language detector, do not define the lng option
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
      lookupCookie: 'language',
      lookupLocalStorage: 'language'
    }
  })

export default i18n
