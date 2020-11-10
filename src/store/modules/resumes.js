import Vue from "vue";

export default {
  state: {
    resumes: [],
    currentResume: {},
    modal: {
      opened: false
    }
  },
  getters: {
    getResumes: state => state.resumes,
    getCurrentResume: state => state.currentResume,
    getResumeModal: state => state.modal
  },
  mutations: {
    setResumes: (state, payload) => {
      state.resumes = payload;
    },
    setCurrentResume: (state, payload) => {
      state.currentResume = payload;
    }
  },
  actions: {
    resumesRequest({ commit }) {
      return new Promise(resolve => {
        Vue.prototype.$http.get(`/Sales`).then(resp => {
          const resumes = resp.data;
          commit("setResumes", resumes);
          resolve(resp);
        });
      });
    },
    createResumeRequest({ commit }, resume) {
      return new Promise(resolve => {
        Vue.prototype.$http.post(`/Sales`, resume).then(resp => {
          commit("setCurrentResume", resume);
          resolve(resp);
        });
      });
    }
  }
};
