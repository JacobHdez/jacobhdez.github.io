export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'Videojuegos' | 'Programación';
    tech: string[];
    link?: string;
    image: string;
}

export const projects: Project[] = []
