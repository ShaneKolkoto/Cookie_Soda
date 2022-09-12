<template>
  <div class="mt-2">
    <span class="text-center font-weight-bold display-1"
      ><p class="mt-6">Shop By Store</p></span
    >
    <v-sheet class="" app max-height="100">
      <v-slide-group v-model="model" class="pa-2" mandatory>
        <v-slide-item
          v-for="n in shops"
          :key="n.img"
          v-slot="{ active, toggle }"
        >
          <v-card
            min-height="50"
            :color="active ? 'white' : 'white lighten-1'"
            class="ma-2 d-flex align-center justify-center"
            height="50"
            width="100"
            @click="toggle"
          >
            <v-img :src="n.img" max-height="40" max-width="40" />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
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
    };
  },
};
</script>
