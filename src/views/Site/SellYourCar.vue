<template>
  <v-card class="pa-5">
    <div class="d-flex justify-center align-center flex-wrap ma-5">
      <v-img
        src="@/assets/site/full_logo.png"
        max-width="300"
        contain
        class="mx-2"
      ></v-img>
      <v-divider
        vertical
        class="mx-5 hidden-sm-and-down"
        color="red"
      ></v-divider>
      <h1>BENEFITS</h1>
    </div>
    <div class="d-flex justify-center flex-wrap">
      <div>
        <div class="d-flex justify-center flex-wrap">
          <v-card flat width="220" class="text-center ma-2 py-3">
            <v-avatar size="40" color="#00205b" class="my-2">
              <h3 class="white--text">1</h3>
            </v-avatar>
            <div class="font-weight-medium" style="color: #00205b">
              15 available photo spots per ad. regardless of the package plan
              you participate.
            </div>
          </v-card>
          <v-card flat width="220" class="text-center ma-2 py-3">
            <v-avatar size="40" color="#c0323e" class="my-2">
              <h3 class="white--text">2</h3>
            </v-avatar>
            <div class="font-weight-medium" style="color: #00205b">
              Optional upgrades to ensure that the ads you want to prioritize
              will have maximum reach.
            </div>
          </v-card>
        </div>
        <div class="d-flex justify-center flex-wrap">
          <v-card flat width="220" class="text-center ma-2 py-3">
            <v-avatar size="40" color="#c0323e" class="my-2">
              <h3 class="white--text">3</h3>
            </v-avatar>
            <div class="font-weight-medium" style="color: #00205b">
              Exclusive focus on the DFW market.
            </div>
          </v-card>
          <v-card flat width="220" class="text-center ma-2 py-3">
            <v-avatar size="40" color="#00205b" class="my-2">
              <h3 class="white--text">4</h3>
            </v-avatar>
            <div class="font-weight-medium" style="color: #00205b">
              Local customer support.
            </div>
          </v-card>
        </div>
      </div>
      <v-img
        class="hidden-sm-and-down"
        src="@/assets/site/car_page_benefits.png"
        max-width="500"
        contain
      ></v-img>
      <v-img
        class="hidden-md-and-up"
        src="@/assets/site/car_page_benefits.png"
        contain
      ></v-img>
    </div>
    <div class="d-flex justify-center flex-wrap">
      <v-card flat width="220" class="text-center ma-2 py-3">
        <v-avatar size="40" color="#00205b" class="my-2">
          <h3 class="white--text">5</h3>
        </v-avatar>
        <div class="font-weight-medium" style="color: #00205b">
          3 dedicated dealership spots designed to bring leads to visit your
          location. It consists of one exterior picture, one picture of the
          facilities and a 30 seconds video where you can invite potential
          customers to visit your dealership.
        </div>
      </v-card>
      <div>
        <v-card flat width="220" class="text-center ma-2 py-3">
          <v-avatar size="40" color="#c0323e" class="my-2">
            <h3 class="white--text">6</h3>
          </v-avatar>
          <div class="font-weight-medium" style="color: #00205b">
            CARSinDFW will have cutting edge local advertisement to ensure a
            greater business presence.
          </div>
        </v-card>
        <v-card flat width="220" class="text-center ma-2 py-3">
          <v-avatar size="40" color="#00205b" class="my-2">
            <h3 class="white--text">7</h3>
          </v-avatar>
          <div class="font-weight-medium" style="color: #00205b">
            Direct Link - A direct link to your existing page.
          </div>
        </v-card>
      </div>
      <div>
        <v-card flat width="220" class="text-center ma-2 py-3">
          <v-avatar size="40" color="#00205b" class="my-2">
            <h3 class="white--text">8</h3>
          </v-avatar>
          <div class="font-weight-medium" style="color: #00205b">
            For individual sellers, our super valued ads will have the duration
            of 30 or 60 days as you chose.
          </div>
        </v-card>
        <v-card flat width="220" class="text-center ma-2 py-3">
          <v-avatar size="40" color="#c0323e" class="my-2">
            <h3 class="white--text">9</h3>
          </v-avatar>
          <div class="font-weight-medium" style="color: #00205b">
            Data feedback - You will be able to track leads generated to your
            dealership.
          </div>
        </v-card>
      </div>
      <v-card flat width="220" class="text-center ma-2 py-3">
        <v-avatar size="40" color="#c0323e" class="my-2">
          <h3 class="white--text">10</h3>
        </v-avatar>
        <div class="font-weight-medium" style="color: #00205b">
          No long term contracts - We understand local business and support
          flexibility. Tou will have the option to continue advertising with us
          or cancel at any time.
        </div>
      </v-card>
    </div>
    <div
      class="text-center headline font-weight-medium mt-5"
      style="color: #c0323e"
    >
      <p>
        For more about all we can do for you,
        <a href="/contact" style="color: #00205b">click here</a> for contact us.
      </p>
      <p class="mt-n4">
        And<a href="/register" style="color: #00205b">click here</a> for our
        plan options.
      </p>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>
