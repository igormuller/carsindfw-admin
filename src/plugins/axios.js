import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: `${process.env.VUE_APP_BASE_URL}/api/`
    });

    // Vue.prototype.$http.interceptors.response.use(
    //   res => {
    //     return res;
    //   },
    //   error => {
    //     if (error.response.status === 401) {
    //       localStorage.clear();
    //       window.location.href = "/login";
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }
});
