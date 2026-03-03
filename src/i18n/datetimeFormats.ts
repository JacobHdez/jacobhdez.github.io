export default {
  'en-US': {
    small: {
      year: 'numeric',
      month: 'short'
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    short_dm: {
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  'es-MX': {
    small: {
      year: 'numeric',
      month: 'short'
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    short_dm: {
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
} as const;
