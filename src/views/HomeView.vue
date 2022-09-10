<template>
  <v-app>
    <Header />
    <Content />
    <br />
    <BottomNav />
    <!-- <Navbar /> -->
    <!-- <SideBar /> -->
    <!-- <v-container fluid>
      <HeaderSlider />
      <v-toolbar flat color="transparent" class="mt-8">
        <v-toolbar-title class="text-h6">Our Trusted Partner</v-toolbar-title>
      </v-toolbar>
      <PartnerView />
      <v-card
        flat
        color="#E2F2E5"
        class="rounded-xl mtop mbottom mx-10 pa-4"
        height="350"
      >
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="5">
            <v-card
              class="rounded-xl mt-n16 ml-16 mobile"
              outlined
              flat
              height="450"
              width="200"
            >
              <v-img src="mobile.png"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="7">
            <h1 class="mt-16">Download App</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
              Provident sequi esse tempore maiores quasi quia non.<br />
              Itaque laboriosam dicta nostrum accusantium assumenda,<br />
              vitae ab ut vel tenetur minima natus commodi!
            </p>
            <v-btn color="black" dark class="mb-10">
              <v-icon color="white" left>fab fa-apple</v-icon>
              App Store
            </v-btn>
            <v-btn color="black" dark class="ml-4 mb-10">
              <v-icon color="white" left>fab fa-google-play</v-icon>
              Play Store
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <FooterCom /> -->
  </v-app>
</template>

<script>
import BottomNav from "@/components/Navigation/BottomNav.vue";
// import SideBar from "@/components/Navigation/SideBar.vue";
import Header from "@/components/Header/HeaderView.vue";
// import PartnerView from "@/components/PartnerView.vue";
import Content from "@/components/ContentView.vue";
// import BottomNav from "@/components/Header/FooterNav.vue";

export default {
  name: "HomeView",
  data: () => ({
    // toggle_exclusive: 1,
  }),
  components: {
    // SideBar,
    Header,
    Content,
    // PartnerView,
    // Footer,
    BottomNav,
  },
};
</script>
<style>
.marginLeft {
  margin-left: -90px;
}
.mtop {
  margin-top: 100px;
}
.mbottom {
  margin-bottom: 100px;
}
.v-card.borderme {
  border: 2px solid green !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}
@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }
  h2.title2 {
    font-size: 15px;
  }
  .top {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>
