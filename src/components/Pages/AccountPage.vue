<template>
  <v-container app fluid>
    <!-- <v-row align="center" class="px-2">
    <v-col cols="12" align-self="center">
      My Profile
      <hr />
    </v-col>
    <v-col cols="12" align-self="center">
      My Account
      <hr />
    </v-col>
    <v-col cols="12" align-self="center">
      My Orders
      <hr />
    </v-col>
    <v-col cols="12" align-self="center">
      Wishlist
      <hr />
    </v-col>
    <v-col cols="12" align-self="center">
      App Settings
      <hr />
    </v-col>
    <v-col cols="12" align-self="center">
      Terms & Conditions
      <hr />
    </v-col>
    <v-col cols="12" align-self="center" v-if="GET_USER">
      Sign Out
      <hr />
    </v-col>
    <v-col cols="12" align-self="center" v-else>
      Sign In
      <hr />
    </v-col>
  </v-row> -->
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("user", ["GET_USER"]),
    version() {
      return this.$store.state.APP_VERSION;
    },
  },
  components: {},
};
</script>
