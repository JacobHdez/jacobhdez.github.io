import { createI18n } from "vue-i18n";

const messages = {
    en: {
        title: 'Portfolio',
        header: {
            prog: 'Programming',
            games: 'Games',
            about: 'About Me',
            contact: 'Contact'
        },
        categories: {
            prog: 'Programming',
            games: 'Games'
        }
    },
    es: {
        title: 'Portafolio',
        header: {
            prog: 'Programación',
            games: 'Videojuegos',
            about: 'Sobre mí',
            contact: 'Contacto'
        },
        categories: {
            prog: 'Programación',
            games: 'Videojuegos'
        }
    },
};

export const i18n = createI18n({
    legacy: false,
    locale: navigator.language.startsWith('es') ? 'es' : 'en',
    fallbackLocale: 'en',
    messages
});
