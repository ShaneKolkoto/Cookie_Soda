<template>
  <v-container app fluid>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>Brands</h2>
      </v-col>
      <v-col cols="3" v-for="(partner, i) in partners" :key="i">
        <div align="center" justify="center">
          <v-img
            :src="partner.img"
            max-height="80"
            max-width="80"
            contain
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "footer-view",
  data: () => ({
    partners: [
      { img: "airbnb.png" },
      { img: "adidas.png" },
      { img: "swords.png" },
      { img: "castle.png" },
    ],
  }),
  components: {},
};
</script>

<style></style>
