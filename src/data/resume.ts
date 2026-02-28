import type { ResumeData } from './types/ResumeData';

export const resumeData: ResumeData = {
  // descriptionKey: 'description',
  sections: [
    {
      titleKey: 'education',
      entries: [
        {
          titleKey: 'lidia.degree',
          organization:
            'Universidad de Guanajuato - Division de Ingenierias Campus Irapuato-Salamanca',
          location: 'Salamanca, Gto. México',
          dates: {
            start: 'Mon Jan 23 2023',
            end: 'Fri Jun 12 2026',
            endStatus: 'present'
          },
          descriptionKeys: ['lidia.description_01']
        },

        {
          titleKey: 'demat.degree',
          organization: 'Universidad de Guanajuato - Departamento de Matemáticas',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Mon Aug 15 2016',
            end: 'Fri Jun 10 2022',
            endStatus: 'date'
          },
          descriptionKeys: ['demat.description_01']
        }
      ]
    },

    {
      titleKey: 'experience',
      entries: [
        {
          titleKey: 'cfe.position',
          organization: 'Comisión Federal de Electricidad',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Mon Sep 06 2021',
            end: 'Fri Feb 18 2022',
            endStatus: 'date'
          },
          descriptionKeys: ['cfe.description_01', 'cfe.description_02', 'cfe.description_03']
        },

        {
          titleKey: 'mixtemi.position',
          organization: 'Mixtemi',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Wed Jul 01 2020',
            end: 'Wed Jun 30 2021',
            endStatus: 'date'
          },
          descriptionKeys: ['mixtemi.description_01', 'mixtemi.description_02']
        },

        {
          titleKey: 'enms_g.position',
          organization: 'Escuela de Nivel Medio Superior de Guanajuato',
          location: 'Guanajuato, Gto. México',
          dates: {
            start: 'Mon Aug 19 2019',
            end: 'Fri Dec 13 2019',
            endStatus: 'date'
          },
          descriptionKeys: [
            'enms_g.description_01',
            'enms_g.description_02',
            'enms_g.description_03'
          ]
        }
      ]
    },

    {
      titleKey: 'extracurricular',
      entries: [
        {
          titleKey: 'unam_dts.title',
          organization: 'Instituto de Matemáticas de la UNAM',
          location: '',
          dates: {
            start: 'Oct 2021'
          },
          descriptionKeys: ['unam_dts.description_01']
        }
      ]
    }
  ]
};
