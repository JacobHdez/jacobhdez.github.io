import type { AboutData } from './types/AboutData';

export const aboutData: AboutData = {
  name: 'Jacobo Hernández Varela',
  portrait: new URL('@/assets/images/portrait.JPEG', import.meta.url).href,
  hero: new URL('@/assets/images/hero.JPEG', import.meta.url).href,
  mainRoleKey: 'role_00',
  roleKey: ['role_01', 'role_02', 'role_03', 'role_04'],

  shortDescriptionKey: 'shortDescription',
  descriptionKey: 'description',

  about: {
    city: 'Guanajuato, México',
    birthday: 'Wed Jun 17 1998',
    degree: 'degree'
  },

  available: {
    status: true,
    yesKey: 'available_y',
    noKey: 'available_n'
  }
};
