<template>
  <v-toolbar flat class="mx-auto mb-2">
    <v-text-field hide-details single-line :label="label" />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ["label"],
  name: "search-bar",
};
</script>
