import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';
import category from './category';
import record from './record';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, err) {
      state.error = err;
    },
    clearError(state) {
      state.error = null;
    },
  },
  getters: {
    error: (s) => s.error,
  },
  actions: {
    async fetchCurrency() {
      let res = await fetch('https://api.exchangeratesapi.io/latest');
      res = await res.json();
      res.rates.EUR = 1.00;
      return res;
    },
  },
  modules: {
    auth,
    info,
    category,
    record,
  },
});
