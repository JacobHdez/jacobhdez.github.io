export type ProjectCategory = 'programming' | 'games';

export interface Project {
  i18n_route: string;
  category: ProjectCategory;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
  links?: {
    web?: string;
    code?: string;
  };
}

export interface PortfolioData {
  descriptionKey?: string;

  projects: Project[];
}
