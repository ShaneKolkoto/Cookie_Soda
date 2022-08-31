<template>
  <v-navigation-drawer
    v-model="drawer"
    color="#D5F0DB"
    mini-variant
    mini-variant-width="90"
    flat
    app
  >
    <v-list flat class="mt-4" v-if="User">
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, i) in topItems"
          :key="i"
          active-class="border"
          :ripple="false"
        >
          <v-list-item-content>
            <v-icon v-text="item.icon"></v-icon>
            <v-list-item-subtitle
              align="center"
              v-text="item.text"
              class="mt-3 caption"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-list flat class="mt-4">
      <v-list-item-group v-model="selectedItem" class="fixedBottom">
        <v-list-item
          v-for="(item, i) in bottomItems"
          :key="i"
          active-class="border"
          :ripple="false"
        >
          <v-list-item-content>
            <v-icon v-text="item.icon"></v-icon>
            <v-list-item-subtitle
              align="center"
              v-text="item.text"
              class="mt-3 caption"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    topItems: [
      { icon: "SK", text: "" },
      { icon: "fas fa-tshirt", text: "Menu" },
      { icon: "fas fa-shopping-cart", text: "Cart" },
    ],
    bottomItems: [
      { icon: "fas fa-info-circle", text: "Help" },
      { icon: "fas fa-cog", text: "Setting" },
    ],
  }),

  computed: {
    ...mapGetters("user", ["GET_USER"]),
  },
  methods: {},
};
</script>

<style>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #d5f0db;
  border-radius: 20px;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: black !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: black !important;
}

.fixedBottom {
  position: fixed !important;
  bottom: 0 !important;
  width: 100%;
}
</style>
