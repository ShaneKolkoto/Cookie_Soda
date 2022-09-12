<template>
  <v-container fluid>
    <CircleCategory />
    <v-row>
      <CardCategory />
    </v-row>
    <PartnerView />
  </v-container>
</template>

<script>
import CircleCategory from "../Category/CircleCategory.vue";
import CardCategory from "../Category/CardCategory.vue";
import PartnerView from "@/components/Partners/PartnerView.vue";

export default {
  name: "content-view",

  components: {
    CircleCategory,
    CardCategory,
    PartnerView,
  },
};
</script>

<style scoped>
.row + .row {
  margin-top: 0px;
}
</style>
