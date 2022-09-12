export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        category: "Woman",
        img: "/img/category/woman.jpg",
        title: "Product 1",
        price: 350,
        amountSold: 10,
        colors: [
          {
            id: 1,
            color: "red",
          },
          {
            id: 2,
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
          },
          {
            id: 4,
            color: "black",
          },
        ],
      },
      {
        id: 2,
        category: "Men",
        img: "/img/category/men.png",
        title: "Product 2",
        price: 200,
        amountSold: 2,
      },
      {
        id: 3,
        category: "Kids",
        img: "/img/category/kid.jpg",
        title: "Product 3",
        price: 400,
        amountSold: 5,
        colors: [
          {
            id: 1,
            color: "red",
          },
          {
            id: 2,
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
          },
          {
            id: 4,
            color: "black",
          },
        ],
      },
      {
        id: 4,
        category: "Accessories",
        img: "/img/category/men.png",
        title: "Product 4",
        price: 350,
        amountSold: 25,
        colors: [
          {
            id: 1,
            color: "red",
          },
          {
            id: 2,
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
          },
          {
            id: 4,
            color: "black",
          },
        ],
      },
      {
        id: 5,
        category: "Summer",
        img: "/img/category/summer.jpg",
        title: "Product 5",
        price: 30,
        amountSold: 100,
        colors: [
          {
            id: 1,
            color: "red",
          },
          {
            id: 2,
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
          },
          {
            id: 4,
            color: "black",
          },
        ],
      },
      {
        id: 6,
        category: "Winter",
        img: "/img/category/woman.jpg",
        title: "Product 6",
        price: 350,
        amountSold: 1,
        colors: [
          {
            id: 1,
            color: "red",
          },
          {
            id: 2,
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
          },
          {
            id: 4,
            color: "black",
          },
        ],
      },
      {
        id: 7,
        category: "Deals",
        img: "/img/category/men.png",
        title: "Product 7",
        price: 250,
        amountSold: 20,
        colors: [
          {
            id: 1,
            color: "red",
          },
          {
            id: 2,
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
          },
          {
            id: 4,
            color: "black",
          },
        ],
      },
    ],
    singleProduct: null,
    topSalers: [],
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
    GET_SALER(state) {
      const filteredCategory = state.products.filter((product) => {
        return product.amountSold >= 10;
      });
      // !ids.includes(id, index + 1)
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
