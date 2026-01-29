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
        hero: {
            title: 'Engineering High-Performance Solution & Games',
            subtitle: 'Full-Stack developer specialized in C++, Unreal Engine 5, and modern web architectures. Turning complex logic into seamless experiences.'
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
        hero: {
            title: 'Ingeniería de Soluciones y Juegos de Alto Rendimiento',
            subtitle: 'Desarrollador full-stack especializado en C++, Unreal Engine 5 y arquitecturas web modernas. Transformando lógica compleja en experiencias fluidas.'
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
