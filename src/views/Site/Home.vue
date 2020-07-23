<template>
  <div>
    <v-card class="mt-3">
      <v-img
        src="@/assets/carousel/carousel_001.png"
        class="flex-container"
        max-height="500"
      >
        <div class="mx-8 mb-5 search">
          <v-row class="ml-5">
            <v-col cols="12" md="2" class="mt-6" style="color: #00205b">
              <strong>Chose Your Next Car</strong>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                :items="['New', 'Used']"
                label="Type"
                :clearable="true"
              ></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="value"
                :items="categories"
                label="Category"
                multiple
              >
                <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                  <span v-if="index === 1" class="grey--text caption">
                    (+{{ value.length - 1 }} others)
                  </span>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="makes"
                :items="brands"
                label="Brand"
                :clearable="true"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="makes"
                :items="models"
                label="Model"
                :clearable="true"
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-btn color="#bf0d3e" class="ml-4 mt-3">Search</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-card>
    <br />
    <v-card>
      <v-carousel
        cycle
        height="200"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet color="indigo" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <div class="mt-10 flex-container">
      <div class="title_cars">New Cars</div>
    </div>
    <v-row>
      <v-col v-for="n in 4" xl="2" lg="3" md="4" sm="6" xs="12" :key="n">
        <v-card max-width="374" height="550">
          <v-img
            height="250"
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/bmw-535i-3.0-m-sport-24v-gasolina-4p-automatico-wmimagem19012339042.jpg?s=fill&w=1920&h=1440&q=75"
          ></v-img>

          <v-card-title>BMW 535i</v-card-title>

          <v-card-text>
            <v-row class="mx-0">
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
            <div>
              Dual-stage suppl. restraint system (SRS) certified to the advanced
              airbag requiremnets of FMVSS 208, S14.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-row>
              <v-col align="end">
                <v-btn color="primary" text to="car-detail">
                  Reserve
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: "",
    makes: "",
    categories: ["Ar", "Direção", "Vidro", "Freio", "Porta", "Espelho"],
    brands: ["BMW", "Astom", "Betley", "GM", "Mais"],
    models: ["IX35", "Corolla", "F100", "Mais"],
    slides: [
      "Welcome to CARSinDFW",
      "Advertisement 01",
      "Advertisement 02",
      "Advertisement 03",
      "Advertisement 04"
    ]
  })
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.search {
  border-top-style: solid;
  border-top-width: 15px;
  border-top-color: #00205b;
  background-color: #f0eeee;
  opacity: 0.8;
}

.title_cars {
  color: #bf0d3e;
  font-family: Racing Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 75px;
  line-height: 94px;
}
</style>
