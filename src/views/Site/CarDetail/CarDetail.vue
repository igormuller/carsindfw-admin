<template>
  <div>
    <BannerTop :slides="slides" v-if="!loading_advertisement"></BannerTop>
    <v-row>
      <v-col cols="12" md="3">
        <v-card :loading="loading_advertisement">
          <v-card-text v-if="!loading_advertisement">
            <AboutDealer :company="advertisement.company_data"></AboutDealer>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" v-if="!loading_advertisement">
        <Galery
          v-if="advertisement.gallery"
          :images="advertisement.gallery"
        ></Galery>
        <AboutCar
          v-if="!loading_advertisement"
          :carDetail="advertisement"
        ></AboutCar>
      </v-col>
      <v-col cols="12" md="3">
        <!-- <v-card class="mb-3">
          <v-card-text>
            <p><v-icon class="mb-1" color="red">star_rate</v-icon> Save</p>
            <p><v-icon class="mb-1" color="red">list</v-icon> My List</p>
            <p><v-icon class="mb-1" color="red">mail_outline</v-icon> E-mail</p>
          </v-card-text>
        </v-card> -->
        <v-card
          v-if="!interest_sended"
          :loading="loading_send"
          :disabled="loading_send"
        >
          <v-card-title class="text--center">Make Your Offer</v-card-title>
          <v-card-text>
            <v-text-field
              label="Name"
              dense
              v-model="interest.name"
              :error-messages="errors.name"
            ></v-text-field>
            <v-text-field
              label="Phone"
              dense
              v-model="interest.phone"
              v-mask="'###-###-####'"
              :error-messages="errors.phone"
            ></v-text-field>
            <v-text-field
              label="E-mail"
              dense
              v-model="interest.email"
              :error-messages="errors.email"
            ></v-text-field>
            <v-checkbox
              label="Recived an e-mail copy"
              dense
              v-model="interest.copy"
            ></v-checkbox>
            <v-textarea
              label="Your Offer"
              rows="3"
              dense
              v-model="interest.description"
              :error-messages="errors.description"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="#00205b"
              class="white--text"
              @click="sendProposal()"
              block
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else class="text-center py-10 px-2">
          <h2 style="color:#00205b">Thanks for your offer</h2>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop";
import Galery from "@/components/Galery";
import AboutCar from "./Components/AboutCar";
import AboutDealer from "./Components/AboutDealer";

export default {
  components: { Galery, BannerTop, AboutCar, AboutDealer },
  props: ["id"],
  data: () => ({
    advertisement: null,
    interest: {},
    interest_sended: false,
    loading_send: false,
    loading_advertisement: true,
    errors: [],
    slides: [
      {
        src: require("@/assets/site/banners/ad_01.png"),
        link: "/contact"
      },
      {
        src: require("@/assets/site/banners/sell_01.png"),
        link: "/register"
      },
      {
        src: require("@/assets/site/banners/carias_care_1.png"),
        link: "http://cariaslubeautocare.com"
      },
      {
        src: require("@/assets/site/banners/planet_dents_1.png"),
        link: "http://www.planetdents.com"
      }
    ]
  }),
  methods: {
    async sendProposal() {
      this.interest.advertisement_id = this.id;
      this.loading_send = true;
      await this.$http
        .post(`/register-interest`, this.interest)
        .then(() => (this.interest_sended = !this.interest_sended))
        .catch(error => {
          console.log(error.response.data.message);
          this.errors = error.response.data.errors;
          this.loading_send = false;

          this.$toasted.global.defaultError({
            msg: error.response.data.message
          });
        });
    }
  },
  created() {
    this.$http
      .get(`/car-detail/${this.id}`)
      .then(res => {
        this.advertisement = res.data;
        this.loading_advertisement = false;
      })
      .catch(() => this.$router.push("/404"));
  }
};
</script>
