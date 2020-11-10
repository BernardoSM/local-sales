import Vue from "vue";
import Vuex from "vuex";
import headoffices from "@/store/modules/headoffices";
import clients from "@/store/modules/clients";
import products from "@/store/modules/products";
import resumes from "@/store/modules/resumes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    headoffices,
    clients,
    products,
    resumes
  }
});
