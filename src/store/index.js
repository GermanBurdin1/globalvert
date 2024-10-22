import { createStore } from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
import user from './modules/user';

export default createStore({
  modules: {
    cart,
    products,
    user,
  },
	state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
    },
  },
  getters: {
    cartCount: (state) => {
      return state.cartItems.length;
    },
    cartItems: (state) => {
      return state.cartItems;
    },
  },
});
