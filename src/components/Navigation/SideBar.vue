<template>
  <v-navigation-drawer
    v-model="drawer"
    color="#D5F0DB"
    mini-variant
    mini-variant-width="90"
    flat
    app
  >
    <v-list flat class="mt-4">
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, i) in items"
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
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { icon: "SK", text: "" },
      // <i class="fa-light fa-clothes-hanger"></i>
      { icon: "fas fa-hamburger", text: "Menu" },
      // { icon: "fas fa-history", text: "History" },
      // { icon: "fas fa-wallet", text: "Wallet" },
      //   { icon: "fas fa-book", text: "About" },
      { icon: "fas fa-sign-out-alt", text: "Login" },
      { icon: "fas fa-cog", text: "Setting" },
      { icon: "fas fa-info-circle", text: "Help" },
    ],
  }),

  computed: {},
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
</style>
