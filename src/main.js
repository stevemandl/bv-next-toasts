const { createApp } = require('vue');
import App from './App.vue';

import BootstrapVueNext from 'bootstrap-vue-next';

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
app.use(BootstrapVueNext);

app.mount('#app');
