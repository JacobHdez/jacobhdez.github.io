import type { PersonalData } from './types';

export const personalData: PersonalData = {
  name: 'Jacobo Hernanández Varela',
  portrait: new URL('@/assets/images/portrait.JPEG', import.meta.url).href,
  hero: new URL('@/assets/images/hero.JPEG', import.meta.url).href
};
