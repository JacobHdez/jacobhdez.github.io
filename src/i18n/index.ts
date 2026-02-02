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
        },
        card: {
            web: 'Website',
            code: 'Code'
        },
        about: {
            title: 'About Me',
            p1: 'I am a Software and Data Engineer with a passion for transforming complex ideas into simple, high-impact solutions. My background combines logical thinking with a human perspective, allowing me to approach technical challenges with both critical analysis and empathy.',
            p2: 'Currently, I focus on building high-performance systems and immersive experiences using Unreal Engine 5, C++, and Python. From real-time data processing to interactive game worlds, I strive to understand how things work at their core to deliver meticulous and efficient results.'
        },
        contact: {
            title: 'Get in Touch',
            subtitle: 'I am always open to discussing new projects, creative ideas, or opportunities in software engineering and game development.',
            send_email: 'Send Email',
            copy_email: 'Copy Email'
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
        },
        card: {
            web: 'Sitio Web',
            code: 'Código'
        },
        about: {
            title: 'Sobre Mí',
            p1: 'Soy un Ingeniero de Software y Datos con una pasión por transformar ideas complejas en soluciones simples y de alto impacto. Mi formación combina el pensamiento lógico con una visión humana, permitiéndome abordar desafíos técnicos con análisis crítico y empatía.',
            p2: 'Actualmente, me enfoco en construir sistemas de alto rendimiento y experiencias inmersivas usando Unreal Engine 5, C++ y Python. Desde el procesamiento de datos en tiempo real hasta mundos de juego interactivos, busco entender el funcionamiento interno de las cosas para entregar resultados meticulosos y eficientes.'
        },
        contact: {
            title: 'Contacto',
            subtitle: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades en ingeniería de software y desarrollo de videojuegos.',
            send_email: 'Enviar Correo',
            copy_email: 'Copiar Correo'
        }
    },
};

export const i18n = createI18n({
    legacy: false,
    locale: navigator.language.startsWith('es') ? 'es' : 'en',
    fallbackLocale: 'en',
    messages
});
