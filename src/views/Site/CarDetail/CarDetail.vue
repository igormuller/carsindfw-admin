<template>
  <div>
    <v-card>
      <BannerTop :slides="slides"></BannerTop>
    </v-card>
    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            class="white--text align-end"
          >
            <v-card-title text="card.title">Anúncio</v-card-title>
          </v-img>
        </v-card>
        <v-card class="mt-3">
          <v-card-text v-if="advertisement.company_data">
            <AboutDealer :company="advertisement.company_data"></AboutDealer>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <Galery
          v-if="advertisement.gallery"
          :images="advertisement.gallery"
        ></Galery>
        <AboutCar :carDetail="advertisement"></AboutCar>
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
              label="Proposal"
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
    advertisement: {},
    interest: {},
    interest_sended: false,
    loading_send: false,
    errors: [],
    slides: [
      { src: require("@/assets/site/car-wash.png") },
      { src: "https://cdn.vuetifyjs.com/images/cards/road.jpg" }
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
      .then(res => (this.advertisement = res.data))
      .catch(() => this.$router.push("/404"));
  }
};
</script>
