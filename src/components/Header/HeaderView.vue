<template>
  <v-container app fluid>
    <div class="text-center">
      <v-row>
        <v-col class="12">Cookie&Soda</v-col>
      </v-row>
    </div>
  </v-container>
  <!-- <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto rounded-xl" flat>
          <v-img
            src="banner.webp"
            max-height="100%"
            max-width="100%"
            contain
            class="flex-wrap"
          >
            <v-card-title class="top ml-10">
              <h2 class="title1">Order NOW!</h2>
            </v-card-title>
            <v-card-title class="ml-10 mt-n8">
              <h2 class="title2">Cookie&Soda</h2>
            </v-card-title>
            <v-card-text class="ml-10">
              <h3 class="green--text">#Coming Soon</h3>
            </v-card-text>
          </v-img>
        </v-card>

        <v-card flat color="#FAFAFA" class="mt-8 py-5 px-16">
          <h2 class="text-center text-uppercase">New Arrivals</h2>
          <SliderView />
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
// import SliderView from "@/components/SliderView.vue";
export default {
  name: "header-view",
  components: {
    // SliderView,
  },
};
</script>
