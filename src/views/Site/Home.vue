<template>
  <v-app id="inspire">
    <v-app-bar app absolute height="110" color="#00205b">
      <div class="logo pt-2">
        <img width="400" src="@/assets/full_logo.png" alt="Logo Cars In DFW" />
      </div>
      <v-spacer></v-spacer>
      <div class="d-inline-flex">
        <v-btn text color="white">
          Sell your car
        </v-btn>
        <v-btn text color="white">
          Dealers list
        </v-btn>
        <v-btn text color="white">
          Contact Us
        </v-btn>
        <v-btn text color="white">
          News
        </v-btn>
        <v-btn class="ml-5" color="red" link to="/admin">
          Login
        </v-btn>
      </div>
    </v-app-bar>
    <v-container>
      <v-content>
        <v-carousel
          cycle
          height="450"
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item src="@/assets/carousel/carousel_001.png" />
          <v-carousel-item src="@/assets/carousel/carousel_002.png" />
          <v-carousel-item src="@/assets/carousel/carousel_003.png" />
          <v-carousel-item src="@/assets/carousel/carousel_004.png" />
          <v-carousel-item src="@/assets/carousel/carousel_005.png" />
          <v-carousel-item src="@/assets/carousel/carousel_006.png" />
        </v-carousel>
      </v-content>
    </v-container>
    <v-container fluid>
      <div class="d-inline-flex">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/bmw-535i-3.0-m-sport-24v-gasolina-4p-automatico-wmimagem19012339042.jpg?s=fill&w=1920&h=1440&q=75"
          ></v-img>

          <v-card-title>BMW 535i</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">
              $ 1,500.00
            </div>

            <div>Dual-stage suppl. restraint system (SRS) certified to the advanced airbag requiremnets of FMVSS 208, S14.</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>


        
        <v-card class="ml-5 my-12" max-width="374">
          <v-img
            height="250"
            src="https://autopolis.files.wordpress.com/2012/08/acura-integra-special-edition-1988.jpg?w=547"
          ></v-img>

          <v-card-title>ACURA Integra</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">
              $ 800.00
            </div>

            <div>Driver Seat Only</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
