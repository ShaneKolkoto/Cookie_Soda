<template>
  <v-app class="landing">
    <BottomNav />
    <Header :name="GET_PAGE" />
    <HomePage v-if="GET_PAGE.to === '/' || GET_PAGE === '/'" />
    <ShopPage v-if="GET_PAGE.to === '/shop'" />
    <BagPage v-if="GET_PAGE.to === '/bag'" />
    <AccountPage v-if="GET_PAGE.to === '/account'" />
    <MorePage v-if="GET_PAGE.to === '/more'" />
  </v-app>
</template>

<script>
import BottomNav from "@/components/Navigation/BottomNav.vue";
import Header from "@/components/Header/HeaderView.vue";
import HomePage from "@/components/Pages/HomePage.vue";
import ShopPage from "@/components/Pages/ShopPage.vue";
import BagPage from "@/components/Pages/BagPage.vue";
import AccountPage from "@/components/Pages/AccountPage.vue";
import MorePage from "@/components/Pages/MorePage.vue";

import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  props: ["page"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("pages", ["GET_PAGE"]),
  },
  components: {
    BottomNav,
    Header,
    HomePage,
    ShopPage,
    BagPage,
    AccountPage,
    MorePage,
  },
};
</script>
<style>
.v-application--wrap {
  min-height: 0;
}
</style>
