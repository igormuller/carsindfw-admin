<template>
  <div>
    <v-card class="mt-3">
      <v-img
        src="@/assets/carousel/carousel_001.png"
        class="flex-container"
        max-height="650"
      >
        <div class="mx-8 mb-5 search">
          <v-row class="ml-5">
            <v-col cols="12" md="2" class="mt-6">Chose Your Next Car</v-col>
            <v-col cols="12" md="2">
              <v-text-field label="Key Word"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="value"
                :items="teste"
                label="Acessories"
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
                :items="models"
                label="Model"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-card>
    <v-row>
      <v-col v-for="n in 10" xl="2" lg="3" md="4" sm="6" xs="12" :key="n">
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
    teste: ["Ar", "Direção", "Vidro", "Freio", "Porta", "Espelho"],
    models: ["BMW", "Astom", "Betley", "GM", "Mais"]
  })
};
</script>

<style scoped>
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
</style>
