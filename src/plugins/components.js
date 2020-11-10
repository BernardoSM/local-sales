import Vue from "vue";
import WeBalloon from "@/components/interface/WeBalloon.vue";
import WeButton from "@/components/interface/WeButton.vue";
import WeIconButton from "@/components/interface/WeIconButton.vue";
import WeInput from "@/components/interface/WeInput.vue";
import WeLoadingOverflow from "@/components/interface/WeLoadingOverflow.vue";
import NavTop from "@/components/layouts/NavTop.vue";

Vue.component("we-icon-button", WeIconButton);
Vue.component("we-balloon", WeBalloon);
Vue.component("we-button", WeButton);
Vue.component("we-input", WeInput);
Vue.component("we-loading-overflow", WeLoadingOverflow);
Vue.component("nav-top", NavTop);
