<template>
  <div>
    <v-toolbar flat>
      <v-text-field hide-details single-line label="Search"></v-text-field>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container fluid>
      <v-row v-for="category in GET_CATEGORY" :key="category.id" align="center">
        <v-col cols="8"
          ><span class="font-weight-bold">{{ category.category }}</span></v-col
        >
        <v-col cols="4">
          <v-img
            max-height="80px"
            max-width="80px"
            class="ml-auto"
            :src="category.img"
          />
        </v-col>
        <!-- <div class="underline"></div> -->
      </v-row>

      <StoreView />

      <MemberShip />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StoreView from "../StoreView.vue";
import MemberShip from "../Accounts/MemberShip.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("products", ["GET_CATEGORY"]),
  },
  components: {
    StoreView,
    MemberShip,
  },
};
</script>

<style scoped>
.underline {
  /* bor */
}
</style>
