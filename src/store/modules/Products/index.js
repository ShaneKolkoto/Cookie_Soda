export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 1,
        category: "Woman",
        img: [
          {
            id: 1,

            img: "/img/category/woman.jpg",
            color: "red",
          },
          {
            id: 2,
            img: "/img/category/summer.jpg",
            color: "blue",
          },
          {
            id: 3,
            img: "/img/category/men.png",
            color: "pink",
          },
          {
            id: 4,
            img: "/img/category/kid.jpg",
            color: "black",
          },
        ],
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
        img: [
          {
            id: 1,
            img: "/img/category/men.png",

            color: "red",
          },
          {
            id: 2,
            img: "/img/category/summer.jpg",
            color: "blue",
          },
          {
            id: 3,
            img: "/img/category/woman.jpg",

            color: "pink",
          },
          {
            id: 4,
            img: "/img/category/kid.jpgg",
            color: "black",
          },
        ],
        title: "Product 2",
        price: 200,
        amountSold: 2,
      },
      {
        id: 3,
        category: "Kids",
        img: [
          {
            id: 1,
            img: "/img/category/kid.jpg",

            color: "red",
          },
          {
            id: 2,
            img: "/img/category/summer.jpg",
            color: "blue",
          },
          {
            id: 3,
            img: "/img/category/woman.jpg",

            color: "pink",
          },
          {
            id: 4,
            img: "/img/category/men.png",
            color: "black",
          },
        ],
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
        img: [
          {
            id: 1,
            img: "/img/category/summer.jpg",

            color: "red",
          },
          {
            id: 2,
            img: "/img/category/woman.jpg",

            color: "blue",
          },
          {
            id: 3,
            img: "/img/category/men.png",
            color: "pink",
          },
          {
            id: 4,
            img: "/img/category/kid.jpg",
            color: "black",
          },
        ],
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
        img: [
          {
            id: 1,
            img: "/img/category/men.png",

            color: "red",
          },
          {
            id: 2,
            img: "/img/category/summer.jpg",
            color: "blue",
          },
          {
            id: 3,
            color: "pink",
            img: "/img/category/woman.jpg",
          },
          {
            id: 4,
            img: "/img/category/kid.jpg",
            color: "black",
          },
        ],
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
        img: [
          {
            id: 1,
            img: "/img/category/woman.jpg",
            color: "red",
          },
          {
            id: 2,
            img: "/img/category/summer.jpg",
            color: "blue",
          },
          {
            id: 3,
            img: "/img/category/men.png",
            color: "pink",
          },
          {
            id: 4,
            img: "/img/category/kid.jpg",
            color: "black",
          },
        ],
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
        img: [
          {
            id: 1,
            img: "/img/category/kid.jpg",

            color: "red",
          },
          {
            id: 2,
            img: "/img/category/summer.jpg",
            color: "blue",
          },
          {
            id: 3,
            img: "/img/category/men.png",
            color: "pink",
          },
          {
            id: 4,
            img: "/img/category/woman.jpg",

            color: "black",
          },
        ],
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
