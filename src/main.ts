import { createApp } from 'vue';
import { i18n } from './i18n';
import { VueReCaptcha } from 'vue-recaptcha-v3';

import App from './App.vue';

import './assets/css/main.css';

const app = createApp(App);

app.use(i18n);
app.use(VueReCaptcha, {
  siteKey: '6Lf4tbUsAAAAAOxadxbP8vQocBRvKDMAl58Jmjls',
  loaderOptions: {
    autoHideBadge: true
  }
});

app.mount('#app');
