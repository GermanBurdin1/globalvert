export default {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Fetch products from API or other source
      const products = [
        { id: 1, name: 'Produit 1', price: 100 },
        { id: 2, name: 'Produit 2', price: 150 },
      ];
      commit('setProducts', products);
    },
  },
  getters: {
    allProducts: (state) => state.products,
  },
};
