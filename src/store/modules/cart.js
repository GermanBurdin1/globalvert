export default {
  state: {
    items: [],
  },
  mutations: {
    addItem(state, product) {
      state.items.push(product);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addItem', product);
    },
  },
  getters: {
    cartItems: (state) => state.items,
  },
};
