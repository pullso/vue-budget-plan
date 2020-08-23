/* eslint-disable */
export default {
  install(Vue) {
    Vue.prototype.$message = function (html) {
      M.toast({ html });
    };

    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}`,  classes: 'red' });
    };
  },
};
/* eslint-enable */
