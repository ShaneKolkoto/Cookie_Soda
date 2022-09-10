<template>
  <v-col cols="12" sm="6" md="4" lg="2">
    <v-card
      class="mx-auto mb-4"
      max-width="400"
      v-for="card in GET_CATEGORY"
      :key="card.id"
    >
      <div class="d-flex justify-center">
        <v-img
          max-height="200"
          min-height="200"
          class="white--text align-end"
          :src="card.img"
        >
          <v-card-title class="card-title"
            >Shop {{ card.category }}</v-card-title
          >
        </v-img>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "card-category",

  data() {
    return {};
  },

  computed: {
    ...mapGetters("products", ["GET_CATEGORY"]),
  },
};
</script>

<style scoped>
.card-title {
  place-content: center;
}
</style>
