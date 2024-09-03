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
});
