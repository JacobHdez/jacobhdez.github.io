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
  },

  skills: [
    { name: 'C/C++', datetime: 'Mon Aug 01 2016', level: '95%' },
    { name: 'Python', datetime: 'Tue Aug 01 2017', level: '90%' },
    { name: 'LaTeX', datetime: 'Mon Jan 01 2018', level: '90%' },
    { name: 'HTML 5', datetime: 'Sun Aug 01 2021', level: '70%' },
    { name: 'Vue 3', datetime: 'Tue Feb 01 2022', level: '70%' },
    { name: 'Tailwind CSS', datetime: 'Tue Feb 01 2022', level: '80%' },
    { name: 'FastAPI', datetime: 'Mon Dec 01 2025', level: '60%' },
    { name: 'Unreal Engine 5', datetime: 'Tue Jun 17 2025', level: '60%' }
  ]
  // skillsDescriptionKey: 'skillsDescription'
};
