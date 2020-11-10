import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
import "./plugins/fontawesome";
import "./plugins/googlemaps";
import "./plugins/mask";
import "./plugins/scrollactive";
import "./plugins/clickOut";
import "./plugins/components";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
