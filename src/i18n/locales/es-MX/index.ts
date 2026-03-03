import data from './data';

export default {
  nav: {
    home: 'Inicio',
    about: 'Sobre Mi',
    skills: 'Habilidades',
    resume: 'Curriculum',
    portfolio: 'Portafolio',
    contact: 'Contacto'
  },

  data,

  home: {
    iam: 'Soy'
  },

  about: {
    city: 'Ciudad',
    phone: 'Teléfono',
    email: 'Email',
    birthday: 'Cumpleaños',
    degree: 'Título'
  },

  skills: {
    year: '< 1 año | {count} año | {count} años'
  },

  resume: {
    education: 'Formación Académica',
    experience: 'Experiencia Laboral',
    extracurricular: 'Actividad extracurricular',
    present: 'Actualidad'
  },

  portfolio: {
    empty: 'No hay proyectos disponibles.',
    web: 'Sitio Web',
    code: 'Código'
  },

  contact: {
    form: {
      name: 'Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar',
      loading: 'Enviando',
      error: 'Algo salió mal. Inténtalo de nuevo.',
      sent: 'Mensaje enviado correctamente.'
    }
  }
};
