import Vue from 'vue';
import Vuelidate from 'vuelidate';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import Paginate from 'vuejs-paginate';
import Loader from '@/components/app/Loader.vue';
import messagePlugins from '@/utils/message.plugin';
import titlePlugin from '@/utils/title.plugin';
import firebase from 'firebase/app';
import tooltipDirective from '@/directives/tooltip.directive';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.use(Vuelidate);
Vue.use(messagePlugins);
Vue.use(titlePlugin);
Vue.use(VueMeta);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
