import data from './data';

export default {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    resume: 'Resume',
    portfolio: 'Porfolio',
    contact: 'Contact'
  },

  data,

  home: {
    iam: "I'm a"
  },

  about: {
    city: 'City',
    phone: 'Phone',
    email: 'Email',
    birthday: 'Birthday',
    degree: 'Degree'
  },

  skills: {
    year: '< 1 year | {count} year | {count} years'
  },

  resume: {
    education: 'Academic Background',
    experience: 'Work Experience',
    extracurricular: 'Extracurricular Activity',
    present: 'Present'
  },

  contact: {
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Submit',
      loading: 'Sending',
      error: 'Something went wrong. Try again.',
      sent: 'Message sent successfully.'
    }
  }
};
