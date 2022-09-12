<template>
  <v-footer bottom fixed>
    <v-bottom-navigation v-model="value" app :background-color="color">
      <v-btn
        value="home"
        height="100%"
        min-width="0"
        :color="color"
        @click="FETCH_PAGE(page)"
        v-for="page in GET_PAGES"
        :key="page.pageNo"
      >
        <span class="nav-text">{{ page.text }}</span>
        <v-icon color="black">{{ page.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    value: "home",
    color: "white accent-12",
    pageName: null,
  }),
  computed: {
    ...mapGetters("pages", ["GET_PAGES", "GET_PAGE"]),
  },
  mounted() {
    this.SET_PAGE(this.GET_PAGES, this.GET_PAGE);
    this.pageName = this.GET_PAGE;
  },
  methods: {
    ...mapActions("pages", ["FETCH_PAGE"]),
    SET_PAGE(pages, page) {
      if (!page) {
        this.FETCH_PAGE(pages[0]);
      }
    },
  },
};
</script>

<style>
.nav-text {
  color: black;
}

a:link {
  text-decoration: none;
}

.icons {
  color: black;
}
</style>
