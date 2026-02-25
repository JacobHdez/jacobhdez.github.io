import type { PersonalData } from './types';

export const personalData: PersonalData = {
  name: 'Jacobo Hernández Varela',
  portrait: new URL('@/assets/images/portrait.JPEG', import.meta.url).href,
  hero: new URL('@/assets/images/hero.JPEG', import.meta.url).href,
  roleKey: ['role_01', 'role_02', 'role_03']
};
