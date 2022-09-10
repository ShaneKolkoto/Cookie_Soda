<template>
  <v-footer app bottom fixed padless>
    <v-bottom-navigation v-model="value" app :background-color="color">
      <v-btn
        value="home"
        height="100%"
        :color="color"
        v-for="item in nav"
        :key="item.text"
      >
        <span>{{ item.text }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    value: "home",
    color: "white accent-4",

    nav: [
      {
        icon: "fa-duotone fa-house",
        text: "home",
      },
      {
        icon: "fa-light fa-cart-shopping",
        text: "Shop",
      },
      {
        icon: "fa-light fa-bag-shopping",
        text: "Bag",
      },
      {
        icon: "fa-light fa-user",
        text: "Account",
      },
      {
        icon: "fa-solid fa-ellipsis",
        text: "More",
      },
    ],
  }),
};
</script>

<style></style>
