<template>
  <v-container fluid>
    <SearchBar :label="label" />
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
      <div class="underline"></div>
    </v-row>

    <StoreView />

    <MemberShip />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import SearchBar from "@/components/SearchBar.vue";
import StoreView from "@/components/Partners/StorePartners.vue";
import MemberShip from "../Accounts/MemberShip.vue";
export default {
  data() {
    return {
      label: "Search",
    };
  },
  computed: {
    ...mapGetters("products", ["GET_CATEGORY"]),
  },
  components: {
    SearchBar,
    StoreView,
    MemberShip,
  },
};
</script>

<style scoped></style>
