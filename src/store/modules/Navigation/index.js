export default {
  namespaced: true,
  state: {
    pages: [
      {
        pageNo: 1,
        icon: "fa-duotone fa-house",
        text: "home",
        name: "Cookie&Soda",
        to: "/",
      },
      {
        pageNo: 2,
        icon: "fa-light fa-cart-shopping",
        text: "shop",
        name: "Shop",
        to: "/shop",
      },
      {
        pageNo: 3,
        icon: "fa-light fa-bag-shopping",
        text: "bag",
        name: "Bag",
        to: "/bag",
      },
      {
        pageNo: 4,
        icon: "fa-light fa-user",
        text: "account",
        name: "Account",
        to: "/account",
      },
      {
        pageNo: 5,
        icon: "fa-solid fa-ellipsis",
        text: "more",
        name: "More",
        to: "/more",
      },
    ],
    page: "/",
  },
  getters: {
    GET_PAGES(state) {
      return state.pages;
    },
    GET_PAGE(state) {
      return state.page;
    },

    //   GET_CATEGORY(state) {
    //     const ids = state.products.map((category) => category.id);
    //     const filteredCategory = state.products.filter(
    //       ({ id }, index) => !ids.includes(id, index + 1)
    //     );

    //     return filteredCategory;
    //   },
  },
  mutations: {
    SET_PAGE(state, page) {
      state.page = page;
    },
  },
  actions: {
    async FETCH_PAGE(context, page) {
      context.commit("SET_PAGE", page);
    },
  },
};
