import Vue from 'vue';
import Vuelidate from 'vuelidate/src';
import dateFilter from '@/filters/date.filter';
import messagePlugins from '@/utils/message.plugin';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
