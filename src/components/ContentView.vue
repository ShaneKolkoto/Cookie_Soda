<template>
  <v-main>
    <v-container fluid>
      <CircleCategory />
    </v-container>
  </v-main>
</template>

<script>
import CircleCategory from "./Category/CircleCategory.vue";
export default {
  name: "content-view",

  components: {
    CircleCategory,
  },
};
</script>
