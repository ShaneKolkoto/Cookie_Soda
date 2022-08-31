import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import user from "./modules/Users/index";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "cookie-soda",
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [vuexLocalStorage.plugin],
});
