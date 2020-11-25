import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  duration: 5000,
  theme: "bubble",
  position: "top-center"
});

Vue.toasted.register(
  "defaultSuccess",
  payload => (!payload.msg ? "Operation executed successfully!" : payload.msg),
  { type: "success", icon: "done" }
);

Vue.toasted.register(
  "defaultError",
  payload => (!payload.msg ? "Oops... Inespered error!!!" : payload.msg),
  { type: "error", icon: "error" }
);
