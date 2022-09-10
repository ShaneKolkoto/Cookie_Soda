<template>
  <v-app>
    <Header />
    <Content />
    <BottomNav />
  </v-app>
</template>

<script>
import Header from "@/components/Header/HeaderView.vue";
import Content from "@/components/ContentView.vue";

import BottomNav from "@/components/Navigation/BottomNav.vue";

export default {
  name: "HomeView",
  data: () => ({}),
  components: {
    Header,
    Content,
    BottomNav,
  },
};
</script>
<style></style>
