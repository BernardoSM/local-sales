import Vue from "vue";

export default {
  state: {
    products: [],
    currentProducts: [],
    modal: {
      opened: false
    }
  },
  getters: {
    getProducts: state => state.products,
    getCurrentProducts: state => state.currentProducts,
    getProductModal: state => state.modal
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
    setCurrentProducts: (state, payload) => {
      state.currentProducts.some(e => e.id === payload.id) === false
        ? state.currentProducts.push(payload)
        : state.currentProducts.splice(
            state.currentProducts.indexOf(payload),
            1
          );
    }
  },
  actions: {
    productsRequest({ commit }) {
      return new Promise(resolve => {
        Vue.prototype.$http.get(`/Products`).then(resp => {
          const products = resp.data;
          commit("setProducts", products);
          resolve(resp);
        });
      });
    },
    createProductRequest({ dispatch }, product) {
      return new Promise(resolve => {
        Vue.prototype.$http.post(`/Products`, product).then(resp => {
          dispatch("productsRequest", []);
          resolve(resp);
        });
      });
    }
  }
};
