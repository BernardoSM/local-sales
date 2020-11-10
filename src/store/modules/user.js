export default {
  state: {
    loggedUser: JSON.parse(localStorage.getItem("logged-user")) || {}
  },
  getters: {
    getLoggedUser: state => state.loggedUser
  },
  mutations: {
    setLoggedUser: (state, user) => {
      state.loggedUser = user;
    }
  },
  actions: {}
};
