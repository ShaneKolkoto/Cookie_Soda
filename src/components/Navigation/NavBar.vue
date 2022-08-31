<template>
  <v-app-bar app color="white" flat hide-on-scroll>
    <v-badge color="#D5F0DB" dot>
      <v-img src="logo.png" contain width="40"></v-img>
    </v-badge>
    <v-toolbar-title class="ml-2">
      <strong>Cookie</strong><span class="green--text">&</span
      ><strong>Soda</strong>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-avatar size="40" class="mr-2 mt-1" v-if="GET_USER">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar" />
    </v-avatar>
    <v-badge
      bordered
      color="error"
      icon="mdi-lock"
      overlap
      class="mr-2 mt-1"
      v-if="!GET_USER"
    >
      <v-btn class="white--text" color="error" depressed>Login</v-btn>
    </v-badge>

    <v-badge
      bordered
      color="success"
      icon="mdi-lock-open"
      overlap
      class="mr-2 mt-1"
      v-else
    >
      <v-btn class="white--text" color="success" depressed>Logout</v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("user", ["GET_USER"]),
  },
};
</script>

<style>
.v-toolbar__title {
  font-size: 1rem !important;
}
</style>
