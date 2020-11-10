export default {
  state: {
    modal: {
      opened: false,
      title: "",
      description: "",
      type: "",
      image: "",
      buttonText: "",
      buttonIcon: ""
    }
  },
  getters: {
    getModal: state => state.modal
  },
  mutations: {
    setModal(state, payload) {
      if (!state.modal.opened) {
        state.modal = payload;
      }
    }
  }
};
