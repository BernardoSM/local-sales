import Vue from "vue";

export default {
  state: {
    token: localStorage.getItem("user-token") || "",
    status: "",
    currentUser: {}
  },
  getters: {
    isAuthenticated: state => (state.token.length > 0 ? true : false),
    authStatus: state => state.status
  },
  mutations: {
    authSuccess: (state, token) => {
      state.status = "success";
      state.token = token;
    },
    resetToken(state) {
      localStorage.removeItem("user-token");
      state.token = "";
    }
  },
  actions: {
    authRequest({ commit }, auth) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/login", auth)
          .then(resp => {
            const token = resp.data.token;
            localStorage.setItem("user-token", token);
            commit("authSuccess", token);
            resolve(resp);
          })
          .catch(err => {
            localStorage.removeItem("user-token");
            reject(err);
          });
      });
    },
    authLogout({ commit }) {
      return new Promise(resolve => {
        localStorage.clear();
        commit("resetToken");
        delete Vue.prototype.$http.defaults.headers.common["token"];
        resolve();
      });
    }
  }
};
