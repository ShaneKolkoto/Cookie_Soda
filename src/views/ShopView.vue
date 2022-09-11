<template>
  <v-app>
    <Header />
    <ShopPage />
    <BottomNav />
  </v-app>
</template>

<script>
import Header from "@/components/Header/HeaderView.vue";
import ShopPage from "@/components/Pages/ShopPage.vue";
import BottomNav from "@/components/Navigation/BottomNav.vue";

export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    Header,
    ShopPage,
    BottomNav,
  },
};
</script>
<style></style>
