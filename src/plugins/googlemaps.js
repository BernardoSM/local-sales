import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCwyDNMo9bgVavtIy3ye9U8THtY_GVZLDo",
    libraries: "places",
    region: "BR",
    language: "pt"
  }
});
