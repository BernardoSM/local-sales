import Vue from "vue";

export default {
  state: {
    clients: [],
    currentClient: {},
    modal: {
      opened: false
    }
  },
  getters: {
    getClients: state => state.clients,
    getCurrentClient: state => state.currentClient,
    getClientModal: state => state.modal
  },
  mutations: {
    setClients: (state, payload) => {
      state.clients = payload;
    },
    setCurrentClient: (state, payload) => {
      state.currentClient = payload;
    }
  },
  actions: {
    clientsRequest({ commit }) {
      return new Promise(resolve => {
        Vue.prototype.$http.get(`/Clients`).then(resp => {
          const clients = resp.data;
          commit("setClients", clients);
          resolve(resp);
        });
      });
    },
    clientsRequestByOffice({ commit }, id) {
      return new Promise(resolve => {
        Vue.prototype.$http.get(`/Clients/Section/${id}`).then(resp => {
          const clients = resp.data;
          commit("setClients", clients);
          resolve(resp);
        });
      });
    },
    createClientRequest({ commit }, client) {
      return new Promise(resolve => {
        Vue.prototype.$http.post(`/Clients`, client).then(resp => {
          const data = resp.data;
          commit("setCurrentClient", data);
          resolve(resp);
        });
      });
    }
  }
};
