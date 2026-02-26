import type { PersonalData } from './types';

export const personalData: PersonalData = {
  name: 'Jacobo Hernández Varela',
  portrait: new URL('@/assets/images/portrait.JPEG', import.meta.url).href,
  hero: new URL('@/assets/images/hero.JPEG', import.meta.url).href,
  mainRoleKey: 'role_00',
  roleKey: ['role_01', 'role_02', 'role_03', 'role_04'],

  shortDescriptionKey: 'shortDescription',
  descriptionKey: 'description',

  about: {
    city: 'Guanajuato, México',
    phone: '+52 473 121 8706',
    email: 'jacobo.hdezv@gmail.com',
    birthday: 'Wed Jun 17 1998',
    degree: 'degree'
  }
};
