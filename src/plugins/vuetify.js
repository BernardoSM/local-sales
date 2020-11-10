import Vue from "vue";
import Vuetify, { VApp, VTextField } from "vuetify/lib";

export default new Vuetify({
  components: {
    VApp,
    VTextField
  },
  icons: {
    iconfont: "faSvg"
  },
  theme: {
    themes: {
      light: {
        primary: "#577BF9",
        secondary: "#D0D0D9",
        accent: "#9AB0FB",
        error: "#FF4757",
        info: "#131340",
        success: "#2ED573",
        warning: "#FFA502"
      }
    }
  }
});

Vue.use(Vuetify);
