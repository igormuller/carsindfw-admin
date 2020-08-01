<template>
  <div>
    <v-footer color="#BF0D3E" class="white--text" height="200">
      <v-row justify="center">
        <v-col cols="2 sm-6" class="mr-5 hidden-md-and-down">
          <h3>Company</h3>
          <h5>About CARSinDFW</h5>
          <h5>Our Team</h5>
          <h5>Advice for Buyers</h5>
          <h5>Contact Us</h5>
          <h5>APP</h5>
        </v-col>
        <v-col cols="2" class="mr-5">
          <h3>Terms</h3>
          <h5>Terms of Use</h5>
          <h5>Privacy</h5>
        </v-col>
        <v-col cols="2" class="mr-5 hidden-md-and-down">
          <h3>For Dealers</h3>
          <h5>Private Owner</h5>
          <h5>Car Dealers</h5>
        </v-col>
        <v-col cols="2" class="mr-5 hidden-md-and-down">
          <h3>Dallas</h3>
          <h5>Dallas History</h5>
          <h5>Dallas Events</h5>
        </v-col>
        <v-col cols="2 sm-6" class="mr-5">
          <h3>Passionate abaut cars!</h3>
          <v-row class="d-flex">
            <a href="http://www.facebook.com/carsindfw" target="_blanck">
              <v-img
                class="mx-3"
                height="32"
                width="32"
                src="@/assets/facebook.png"
              />
            </a>
            <a
              href=" https://wa.me/48996085948?text=I'm%20interested%20in%20your%20car%20for%20sale"
              target="_blanck"
            >
              <v-img
                class="mx-3"
                height="32"
                width="32"
                src="@/assets/whatsapp.png"
              />
            </a>
            <a href="http://www.instagram.com/cars.indfw" target="_blanck">
              <v-img
                class="mx-3"
                height="32"
                width="32"
                src="@/assets/instagram.png"
              />
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
    <!-- <v-footer color="#00205b" class="white--text">
      <v-row>
        <v-col align="end">
          <span class="font-weight-medium">
            &copy; 2020 Carsindfw, Inc., All Rights Reserved.
          </span>
        </v-col>
      </v-row>
    </v-footer> -->
  </div>
</template>

<script>
export default {};
</script>
