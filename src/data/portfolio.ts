import type { PortfolioData } from './types/PortfolioData';

export const portfolioData: PortfolioData = {
  // descriptionKey: 'description'

  projects: [
    {
      i18n_route: 'hs_web',
      category: 'programming',
      titleKey: 'title',
      descriptionKey: 'description',
      tech: ['Nuxt', 'Vue 3', 'Typescript', 'Tailwind CSS'],
      image: new URL('@/assets/images/projects/hollow_sense/web/hs_web.webp', import.meta.url).href,
      links: {
        web: 'https://hollowsense.com/'
      }
    },
    {
      i18n_route: 'hs_blog',
      category: 'programming',
      titleKey: 'title',
      descriptionKey: 'description',
      tech: ['Astro', 'Typescript', 'Tailwind CSS'],
      image: new URL('@/assets/images/projects/hollow_sense/blog/hs_blog.webp', import.meta.url).href,
      links: {
        web: 'https://hollowsense.github.io/',
        code: 'https://github.com/hollowsense/hollowsense.github.io'
      }
    },
    {
      i18n_route: 'hs_lockdown',
      category: 'games',
      titleKey: 'title',
      descriptionKey: 'description',
      tech: ['Unreal Engine 5', 'Blueprints', 'C++'],
      image: new URL('@/assets/images/projects/hollow_sense/hs_lockdown/lockdown_cover.webp', import.meta.url).href,
      links: {
        web: 'https://store.steampowered.com/app/3968040/Hollow_Stories_Lockdown/'
      }
    }
  ]
};
