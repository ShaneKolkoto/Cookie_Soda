<template>
  <!-- <v-container app fluid> -->
  <v-sheet app max-height="200">
    <span class="text-center font-weight-bold"><p>Top Sales</p></span>
    <v-slide-group v-model="model" class="" mandatory>
      <v-slide-item
        v-for="sale in GET_SALER"
        :key="sale.id"
        v-slot="{ active, toggle }"
      >
        <v-card
          class="ma-1 align-center"
          max-width="150"
          min-height="150"
          :color="active ? 'white' : 'white lighten-1'"
          @click="toggle"
        >
          <v-img
            class="ma-3"
            height="130px"
            width="120px"
            :alt="sale.title"
            :src="sale.img[0].img"
            @click="SET_PRODUCT(sale)"
          >
          </v-img>
          <v-divider class="mx-4"></v-divider>
          <v-card-subtitle class="">
            <v-icon
              class="pa-1"
              v-for="color in sale.img"
              :key="color.id"
              :color="color.color"
              @click="sale.img[0].img = color.img"
              >fa-thin fa-square</v-icon
            >
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div class="font-weight-bold">{{ sale.title }}</div>
            <div>R {{ sale.price }}.00</div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  <!-- </v-container> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "slider-view",
  data() {
    return {
      model: null,
      toggle_one: 0,
      img: null,
      index: 0,
    };
  },
  computed: {
    ...mapGetters("products", ["GET_SALER"]),
  },
  mounted() {
    this.setImage(this.GET_SALER, this.GET_SALER);
  },
  methods: {
    ...mapActions("products", ["SET_PRODUCT"]),
    changePicture(item) {
      console.log(item);
      // this.index = ++this.index % item.length;
      // console.log(this.index);
    },
  },
};
</script>

<style scoped>
.v-application p {
  margin-bottom: 5px;
}
</style>
