<template>
  <div>
    <v-footer color="#c0323e" class="white--text" height="200">
      <v-row justify="center">
        <v-col cols="2 sm-6" class="mr-5 hidden-md-and-down">
          <h3>Company</h3>
          <v-btn text x-small to="/about" class="font-weight-black white--text">
            About CARSinDFW
          </v-btn>
          <v-btn
            text
            x-small
            to="/sell-your-car"
            class="font-weight-black white--text"
          >
            Advice for Buyers
          </v-btn>
          <v-btn
            text
            x-small
            to="/contact"
            class="font-weight-black white--text"
          >
            Contact Us
          </v-btn>
          <v-btn
            text
            x-small
            to="/fraud-awareness"
            class="font-weight-black white--text"
          >
            Fraud Awareness
          </v-btn>
        </v-col>
        <v-col cols="2" class="mr-5">
          <h3>Terms</h3>
          <h5>Terms of Use</h5>
          <h5>Privacy</h5>
        </v-col>
        <v-col cols="2" class="mr-5 hidden-md-and-down">
          <h3>For Dealers</h3>
          <v-btn
            text
            x-small
            to="/dealers"
            class="font-weight-black white--text"
          >
            Car Dealers
          </v-btn>
        </v-col>
        <v-col cols="2" class="mr-5 hidden-md-and-down">
          <h3>Dallas</h3>
          <v-btn
            text
            x-small
            to="/dallas-history"
            class="font-weight-black white--text"
          >
            Dallas History
          </v-btn>
          <v-btn
            text
            x-small
            to="/dallas-events"
            class="font-weight-black white--text"
          >
            Dallas Events
          </v-btn>
        </v-col>
        <v-col cols="2 sm-6" class="mr-5">
          <v-img
            src="@/assets/site/full_logo.png"
            min-width="150"
            max-width="200"
          ></v-img>
          <h3 style="font-family: Racing Sans One;">Passionate about cars!</h3>
          <v-row class="d-flex">
            <a href="http://www.facebook.com/carsindfw" target="_blanck">
              <v-img
                class="mx-3"
                height="32"
                width="32"
                src="@/assets/site/facebook.png"
              />
            </a>
            <a
              href=" https://wa.me/+1(469)456-4082?text=I'm%20interested%20in%20your%20car%20for%20sale"
              target="_blanck"
            >
              <v-img
                class="mx-3"
                height="32"
                width="32"
                src="@/assets/site/whatsapp.png"
              />
            </a>
            <a href="http://www.instagram.com/cars.indfw" target="_blanck">
              <v-img
                class="mx-3"
                height="32"
                width="32"
                src="@/assets/site/instagram.png"
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
