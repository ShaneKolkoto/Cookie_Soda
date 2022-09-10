<template>
  <!-- <v-container app fluid> -->
  <v-row style="background-color: purple" class="">
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-col cols="3"
          ><v-icon large icon dark>mdi-account-circle</v-icon></v-col
        >
        <v-col cols="5" class="text-center text-uppercase">
          <div class="d-flex">manage Your Account</div>
        </v-col>
        <v-col cols="4" class="text-center">
          <v-btn x-small>View More</v-btn>
        </v-col>
      </v-row>
    </v-col>
    <!-- <v-col cols="3"> -->
    <!-- <v-icon x-large style="color: white">mdi-account-circle</v-icon>
    </v-col>

    <v-col cols="5">
      <p class="text-uppercase subtitle-1">Manage your account</p>
    </v-col>

    <v-col cols="4">
      <v-btn>View Now</v-btn>
    </v-col> -->
  </v-row>
  <!-- </v-container> -->
</template>

<script>
export default {
  name: "account-banner",
  data() {
    return {};
  },
};
</script>
