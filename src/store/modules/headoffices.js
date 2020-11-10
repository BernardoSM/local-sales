import Vue from "vue";

export default {
  state: {
    headOffices: [],
    currentHeadOffice: {},
    modal: {
      opened: false
    }
  },
  getters: {
    getHeadOffices: state => state.headOffices,
    getCurrentHeadOffice: state => state.currentHeadOffice,
    getHeadOfficeModal: state => state.modal
  },
  mutations: {
    setHeadOffices: (state, payload) => {
      state.headOffices = payload;
    },
    setCurrentHeadOffice: (state, payload) => {
      state.currentHeadOffice = payload;
    }
  },
  actions: {
    headOfficesRequest({ commit }) {
      return new Promise(resolve => {
        Vue.prototype.$http.get(`/HeadOffices`).then(resp => {
          const headOffices = resp.data;
          commit("setHeadOffices", headOffices);
          resolve(resp);
        });
      });
    },
    createHeadOfficeRequest({ commit }, headoffice) {
      return new Promise(resolve => {
        Vue.prototype.$http.post(`/HeadOffices`, headoffice).then(resp => {
          const data = resp.data;
          commit("setCurrentHeadOffice", data);
          resolve(resp);
        });
      });
    }
  }
};
