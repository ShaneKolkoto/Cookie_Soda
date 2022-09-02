export default {
  namespaced: true,
  state: {
    user: null,
    token: null,
  },
  getters: {
    GET_USER(state) {
      return state.user;
    },
    GET_TOKEN(state) {
      return state.token;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async Login(context) {
      const user = [
        {
          id: 1,
          name: "John",
          surname: "Doe",
          email: "johndoe@gmail.com",
          contact: "+27 00 000 0000",
        },
      ];
      context.commit("SET_USER", user);
    },
    async Logout(context) {
      context.commit("SET_USER", null);
    },
  },
};
