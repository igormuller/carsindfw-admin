import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
import "./plugins/toasted";
import VueSweetalert2 from "vue-sweetalert2";
import VueMask from "v-mask";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueMask);
Vue.use(VueSweetalert2, {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674"
});
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAimraeRdmEH0NntawJL22wBNSUgnhoPiA"
  }
});

Vue.config.productionTip = false;

Vue.filter("currency", function(value) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
