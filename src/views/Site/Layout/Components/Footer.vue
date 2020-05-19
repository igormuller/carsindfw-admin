<template>
  <div>
    <v-footer color="#BF0D3E" class="white--text" height="200">
      <v-row>
        <v-col cols="4" class="pl-12">
          <h3>Company</h3>
          <h5>About carsindfw.com</h5>
          <h5>Terms of Services</h5>
          <h5>Privacity Statement</h5>
          <h5>Contact Us</h5>
        </v-col>
        <v-col cols="4" class="pl-12">
          <h3>Useful for you</h3>
          <h5>How to sign up?</h5>
          <h5>Personal</h5>
          <h5>Dealers</h5>
          <h5></h5>
          <h5>Eveluate your car</h5>
        </v-col>
        <v-col cols="4" class="pl-12">
          <h3>Social</h3>
          <h5>News DFW</h5>
          <h5>Blog</h5>
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
    <v-footer color="#00205b" class="white--text">
      <v-row>
        <v-col align="end">
          <span class="font-weight-medium">
            &copy; 2020 Carsindfw, Inc., All Rights Reserved.
          </span>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>
