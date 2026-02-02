export interface Project {
    id: number;
    title: {
        en: string;
        es: string;
    };
    description: {
        en: string;
        es: string;
    };
    longDescription: {
        en: string;
        es: string;
    };
    features: {
        en: string[];
        es: string[];
    };
    category: 'Games' | 'Programming';
    tech: string[];
    links?: {
        web?: string;
        code?: string;
    };
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: {
            en: "Hollow Stories: Lockdown",
            es: 'Hollow Stories: Lockdown'
        },
        description: {
            en: 'A neo-retro noir horror narrative game where you explore, solve puzzles, and survive by fighting enemies in a city controlled by corruption and cults.',
            es: 'Un juego narrativo neo-retro de terror noir donde exploras, resuelves acertijos y sobrevives combatiendo enemigos en una ciudad controlada por corrupción y cultos.'
        },
        longDescription: {
            en: 'Developed with Unreal Engine 5, this project focuses on creating a high-performance atmospheric experience. It utilizes C++ for core gameplay systems and custom shaders to achieve a "neo-retro" aesthetic while maintaining modern survival horror mechanics and efficient resource management.',
            es: 'Desarrollado con Unreal Engine 5, este proyecto se enfoca en crear una experiencia atmosférica de alto rendimiento. Utiliza C++ para los sistemas centrales de juego y shaders personalizados para lograr una estética "neo-retro", manteniendo mecánicas modernas de survival horror y una gestión eficiente de recursos.'
        },
        features: {
            en: [
                "Custom post-processing pipeline for noir aesthetic",
                "Optimized puzzle system with modular architecture",
                "Dynamic lighting and environmental storytelling focus"
            ],
            es: [
                "Pipeline de post-procesado personalizado para estética noir",
                "Sistema de acertijos optimizado con arquitectura modular",
                "Enfoque en iluminación dinámica y narrativa ambiental"
            ]
        },
        category: 'Games',
        tech: ['Unreal Engine 5', 'C++'],
        links: {
            web: 'https://store.steampowered.com/app/3968040/Hollow_Stories_Lockdown/'
        },
        image: '/images/projects/HollowStories_Lockdown.webp'
    },
    {
        id: 2,
        title: {
            en: "Hollow Sense's Development Log",
            es: 'Blog de Desarrollo de Hollow Sense'
        },
        description: {
            en: 'A technical documentation platform and dev-log focused on tracking progress, architecture decisions, and milestones.',
            es: 'Una plataforma de documentación técnica y blog de desarrollo enfocado en el seguimiento de progreso, decisiones de arquitectura e hitos.'
        },
        longDescription: {
            en: "This development log is a dedicated platform for documenting the technical evolution of the Hollow Sense ecosystem. Built using Vite and Vue 3, it serves as a live record of engineering challenges and solutions. It emphasizes clean code principles, high-performance web standards, and provides a transparent look at the development lifecycle of complex software projects.",
            es: "Este blog de desarrollo es una plataforma dedicada a documentar la evolución técnica del ecosistema Hollow Sense. Construido con Vite y Vue 3, sirve como un registro vivo de desafíos y soluciones de ingeniería. Enfatiza principios de código limpio, estándares web de alto rendimiento y ofrece una mirada transparente al ciclo de vida de proyectos de software complejos."
        },
        features: {
            en: [
                "High-performance static site generation using Vite",
                "Reactive interface built with Vue 3 and TypeScript",
                "Modern styling and design implementation with TailwindCSS v4",
                "Automated CI/CD workflow via GitHub Actions for real-time updates"
            ],
            es: [
                "Generación de sitio estático de alto rendimiento usando Vite",
                "Interfaz reactiva construida con Vue 3 y TypeScript",
                "Estilización y diseño moderno implementado con TailwindCSS v4",
                "Flujo de trabajo CI/CD automatizado vía GitHub Actions para actualizaciones constantes"
            ]
        },
        category: 'Programming',
        tech: ['Vite', 'Vue 3', 'TypeScript', 'TailwindCSS v4',],
        links: {
            web: 'https://hollowsense.github.io/',
            code: 'https://github.com/hollowsense/hollowsense.github.io'
        },
        image: '/images/projects/HollowSense_DevLog.webp'
    }
];
