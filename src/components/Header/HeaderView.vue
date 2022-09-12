<template>
  <v-container fluid>
    <v-app-bar app dense v-if="name.name !== 'Account'">
      <v-row
        class="text-center text-uppercase text-bold"
        align="center"
        justify="center"
        v-show="name.name !== 'Account'"
      >
        <div class="black--text" v-if="name === '/'">Cookie&Soda</div>
        <div class="black--text" v-else>{{ name.name }}</div>
      </v-row>
    </v-app-bar>

    <v-app-bar app dense v-else height="250">
      <v-row
        class="text-center text-uppercase text-bold"
        align="center"
        justify="center"
      >
        Account
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  props: ["name"],
  name: "header-view",
  data() {
    return {
      value: "music",
      color: "purple accent-4",
      icons: [
        "fab fa-apple",
        "fab fa-google-plus-g",
        "fab fa-twitter",
        "fab fa-facebook-f",
      ],
    };
  },
};
</script>
