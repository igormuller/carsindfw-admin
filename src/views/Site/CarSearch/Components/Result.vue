<template>
  <div>
    <v-row>
      <v-col v-for="n in 10" xl="2" lg="3" md="4" sm="6" xs="12" :key="n">
        <v-card max-width="374" height="400">
          <v-img
            max-height="170"
            contain
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
            <div class="my-1 subtitle-1">
              <strong>$ 1,500.00</strong>
            </div>
            <div>
              Dual-stage suppl. restraint system (SRS) certified to the advanced
              airbag...
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text to="car-detail">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Result",
  data: () => ({
    page: 3
  })
};
</script>
