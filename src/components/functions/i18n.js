import i18n from "i18next"
import { reactI18nextModule } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '../../locales/en/common.json'
import translationDE from '../../locales/de/common.json'

const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
}

i18n.use(LanguageDetector).use(reactI18nextModule)
    .init({
        resources,
        interpolation: {
            escapeValue: false
        }
    })
export default i18n