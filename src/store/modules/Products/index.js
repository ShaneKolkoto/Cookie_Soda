export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        category: "Woman",
        img: "/img/category/woman.jpg",
      },
      {
        id: 2,
        category: "Men",
        img: "/img/category/men.png",
      },
      {
        id: 3,
        category: "Kids",
        img: "/img/category/kid.jpg",
      },
      {
        id: 4,
        category: "Accessories",
        img: "/img/category/men.png",
      },
      {
        id: 5,
        category: "Summer",
        img: "/img/category/summer.jpg",
      },
      {
        id: 6,
        category: "Winter",
        img: "/img/category/woman.jpg",
      },
      {
        id: 7,
        category: "Deals",
        img: "/img/category/men.png",
      },
    ],
    singleProduct: null,
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products;
    },
    GET_PRODUCT(state) {
      return state.product;
    },
    GET_CATEGORY(state) {
      const ids = state.products.map((category) => category.id);
      const filteredCategory = state.products.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );

      return filteredCategory;
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
  },
  actions: {},
};
