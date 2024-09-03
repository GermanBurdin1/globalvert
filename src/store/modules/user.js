// store/modules/user.js
export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, user) {
      // Perform login logic
      commit('setUser', user);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    userInfo: (state) => state.user,
  },
};
