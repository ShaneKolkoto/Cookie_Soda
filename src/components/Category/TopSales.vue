<template>
  <v-container app fluid>
    <span class="text-center font-weight-bold"><p>Top Sales</p></span>
    <v-sheet app max-height="200">
      <v-slide-group v-model="model" class="" mandatory>
        <v-slide-item
          v-for="sale in GET_SALER"
          :key="sale.id"
          v-slot="{ active, toggle }"
        >
          <v-card
            class="ma-2 align-center"
            max-width="150"
            min-height="150"
            :color="active ? 'white' : 'white lighten-1'"
            @click="toggle"
          >
            <v-img
              class="ma-3"
              height="130px"
              width="120px"
              :src="img || sale.img[0].img"
            >
            </v-img>
            <v-divider class="mx-4"></v-divider>
            <v-card-subtitle class="">
              <v-icon
                class="pa-1"
                v-for="color in sale.colors"
                :key="color.id"
                :color="color.color"
                @click="setImage(color.color, sale)"
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
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "slider-view",
  data() {
    return {
      model: null,
      toggle_one: 0,
      img: null,
    };
  },
  computed: {
    ...mapGetters("products", ["GET_SALER"]),
  },
  methods: {
    setImage: function (color, item) {
      const filteredImg = item.img.filter((product) => {
        return product.color === color;
      });
      this.img = filteredImg[0].img;
    },
  },
};
</script>
