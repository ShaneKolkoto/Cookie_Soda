<template>
  <v-row align="center" justify="center">
    <v-slide-group v-model="model" class="pa-1 slider-group" center-active>
      <v-slide-item v-for="category in GET_CATEGORY" :key="category.id">
        <v-row class="mx-4 mt-2">
          <div class="mx-auto d-flex flex-row">
            <div class="d-flex flex-column text-center">
              <v-avatar color="#877787" size="50"
                ><v-img align="center" :src="category.img"></v-img>
              </v-avatar>
              <span class="caption grey--text">{{ category.category }}</span>
            </div>
          </div>
        </v-row>
      </v-slide-item>
    </v-slide-group>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      model: null,
      category: null,
    };
  },

  computed: {
    ...mapGetters("products", ["GET_CATEGORY"]),
  },

  mounted() {},
};
</script>

<style scoped>
.rounded-card {
  border-radius: 50%;
}
.slider-group {
  height: 80px;
}
</style>
