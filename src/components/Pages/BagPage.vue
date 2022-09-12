<template>
  <div>
    <SearchBar :label="label" />
    <v-container fluid>
      <v-card class="mx-auto mb-4" max-width="400" height="170px">
        <v-row justify="center" align="center">
          <v-col cols="12" class="mt-2">
            <div class="d-flex justify-center">
              <v-icon size="70">fa-light fa-bag-shopping</v-icon>
            </div>
          </v-col>
          <v-col cols="12" class="">
            <div class="d-flex justify-center">Your Shopping Bag is Empty</div>
          </v-col>
        </v-row>
      </v-card>
      <TopSales />
    </v-container>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import TopSales from "@/components/Category/TopSales.vue";
export default {
  data() {
    return {
      label: "Find something to add to your bag",
    };
  },
  computed: {},
  components: {
    SearchBar,
    TopSales,
  },
  mounted() {},
};
</script>
