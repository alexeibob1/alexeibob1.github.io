import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};

i18n
    .use(initReactI18next)

    .init({
        resources,
        lng: "fr",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;