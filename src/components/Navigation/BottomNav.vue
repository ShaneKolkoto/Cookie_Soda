<template>
  <v-footer app bottom fixed padless>
    <v-bottom-navigation v-model="value" app :background-color="color">
      <router-link v-for="item in nav" :key="item.text" :to="item.to">
        <v-btn value="home" height="100%" :color="color">
          <span class="nav-text">{{ item.text }}</span>
          <v-icon color="black">{{ item.icon }}</v-icon>
        </v-btn>
      </router-link>
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
        to: "/",
      },
      {
        icon: "fa-light fa-cart-shopping",
        text: "Shop",
        to: "/shop",
      },
      {
        icon: "fa-light fa-bag-shopping",
        text: "Bag",
        to: "/bag",
      },
      {
        icon: "fa-light fa-user",
        text: "Account",
        to: "/account",
      },
      {
        icon: "fa-solid fa-ellipsis",
        text: "More",
        to: "/more",
      },
    ],
  }),
};
</script>

<style>
.nav-text {
  color: black;
}

a:link {
  text-decoration: none;
}

.icons {
  color: black;
}
</style>
