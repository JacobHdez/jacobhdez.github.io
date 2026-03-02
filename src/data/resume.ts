import type { ResumeData } from './types/ResumeData';

export const resumeData: ResumeData = {
  // descriptionKey: 'description',
  sections: [
    {
      titleKey: 'education',
      entries: [
        {
          i18n_route: 'lidia',
          titleKey: 'degree',
          organization:
            'Universidad de Guanajuato - Division de Ingenierias Campus Irapuato-Salamanca',
          location: 'Salamanca, Gto. México',
          dates: {
            start: 'Mon Jan 23 2023',
            end: 'Fri Jun 12 2026',
            endStatus: 'present'
          },
          descriptionKeys: ['description_01']
        },

        {
          i18n_route: 'demat',
          titleKey: 'degree',
          organization: 'Universidad de Guanajuato - Departamento de Matemáticas',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Mon Aug 15 2016',
            end: 'Fri Jun 10 2022',
            endStatus: 'date'
          },
          descriptionKeys: ['description_01']
        }
      ]
    },

    {
      titleKey: 'experience',
      entries: [
        {
          i18n_route: 'cfe',
          titleKey: 'position',
          organization: 'Comisión Federal de Electricidad',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Mon Sep 06 2021',
            end: 'Fri Feb 18 2022',
            endStatus: 'date'
          },
          descriptionKeys: ['description_01', 'description_02', 'description_03']
        },

        {
          i18n_route: 'mixtemi',
          titleKey: 'position',
          organization: 'Mixtemi',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Wed Jul 01 2020',
            end: 'Wed Jun 30 2021',
            endStatus: 'date'
          },
          descriptionKeys: ['description_01', 'description_02']
        },

        {
          i18n_route: 'enms_g',
          titleKey: 'position',
          organization: 'Escuela de Nivel Medio Superior de Guanajuato',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Mon Aug 19 2019',
            end: 'Fri Dec 13 2019',
            endStatus: 'date'
          },
          descriptionKeys: ['description_01', 'description_02', 'description_03']
        }
      ]
    },

    {
      titleKey: 'extracurricular',
      entries: [
        {
          i18n_route: 'unam_dts',
          titleKey: 'title',
          organization: 'Instituto de Matemáticas de la UNAM',
          location: '',
          dates: {
            start: 'Oct 2021'
          },
          descriptionKeys: ['description_01']
        }
      ]
    }
  ]
};
