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
            min-height="100"
            :color="active ? 'white' : 'white lighten-1'"
            @click="toggle"
          >
            <v-img class="ma-3" height="80px" width="90px" :src="sale.img">
            </v-img>

            <v-card-subtitle
              class="pb-0"
              v-for="color in sale.colors"
              :key="color.id"
            >
              <v-row class="">
                <v-col cols="3" class="">
                  <v-btn
                    max-width="10px"
                    height="20px"
                    :color="color.color"
                    @click="getColor(color)"
                  ></v-btn>
                </v-col>
              </v-row>
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
      shops: [
        { img: "airbnb.png" },
        { img: "adidas.png" },
        { img: "swords.png" },
        { img: "castle.png" },
      ],
      toggle_one: 0,
    };
  },
  computed: {
    ...mapGetters("products", ["GET_SALER"]),
    swatchStyle() {
      const { color, menu } = this;
      return {
        backgroundColor: color,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
  },
  methods: {
    getColor(color) {
      console.log(color);
    },
  },
};
</script>
