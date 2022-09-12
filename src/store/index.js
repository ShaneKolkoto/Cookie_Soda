import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import pages from "./modules/Navigation/index";
import user from "./modules/Users/index";
import products from "./modules/Products/index";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "cookie-soda",
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    pages,
    user,
    products,
  },
  state: {
    APP_VERSION: "1.0.0",
  },
  plugins: [vuexLocalStorage.plugin],
});
