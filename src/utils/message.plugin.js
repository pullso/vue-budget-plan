/* eslint-disable */
export default {
  install(Vue, options) {
    Vue.prototype.$message = function (html) {
      M.toast({ html });
    };

    Vue.prototype.$error = function (html) {
      M.Toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
/* eslint-enable */
