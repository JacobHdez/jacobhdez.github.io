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
    category: 'Games' | 'Programming';
    tech: string[];
    link?: string;
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
        category: 'Games',
        tech: ['Unreal Engine 5', 'C++'],
        link: 'https://store.steampowered.com/app/3968040/Hollow_Stories_Lockdown/',
        image: '/images/projects/HollowStories_Lockdown.webp'
    },
    {
        id: 2,
        title: {
            en: "Hollow Sense's Development Log",
            es: 'Blog de Desarrollo de Hollow Sense'
        },
        description: {
            en: '',
            es: ''
        },
        category: 'Programming',
        tech: ['Vite', 'Vue 3', 'TypeScript', 'TailwindCSS v4',],
        link: 'https://hollowsense.github.io/',
        image: '/images/projects/HollowSense_DevLog.webp'
    }
]
