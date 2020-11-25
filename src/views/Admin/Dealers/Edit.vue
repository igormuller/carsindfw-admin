<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card elevation="5" :loading="isBusy" :disabled="isBusy">
        <v-card-title><h2>Edit Dealer</h2></v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="3">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-img
                    :src="setLogoDealer"
                    alt="Logo"
                    height="200"
                    width="200"
                    contain
                    @click="uploadAvatar"
                  >
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#036358">
                        <v-btn rounded color="primary">Choose Your Logo</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-img>
                </template>
              </v-hover>
              <input
                ref="uploaderAvatar"
                class="d-none"
                type="file"
                accept="image/*"
                @change="loadAvatar"
              />
            </v-col>
            <v-col cols="12" md="9">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Name"
                    v-model="dealer.name"
                    :error-messages="errors.name"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Document"
                    v-model="dealer.document"
                    v-mask="'##-#######'"
                    :error-messages="errors.document"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Phone"
                    v-model="dealer.phone"
                    v-mask="'###-###-####'"
                    :error-messages="errors.phone"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="E-mail"
                    v-model="dealer.email"
                    :error-messages="errors.email"
                    type="email"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Site"
                    v-model="dealer.site"
                    :error-messages="errors.site"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    label="Instagram"
                    v-model="dealer.instagram"
                    :error-messages="errors.instagram"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    label="Facebook"
                    v-model="dealer.facebook"
                    :error-messages="errors.facebook"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="1">
              <v-text-field
                label="Zipcode"
                v-model="dealer.address.zipcode"
                v-mask="'#####'"
                :error-messages="errors['address.zipcode']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                label="Street"
                v-model="dealer.address.street"
                :error-messages="errors['address.street']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="1">
              <v-text-field
                label="Number"
                v-model="dealer.address.number"
                :error-messages="errors['address.number']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                label="Neighborhood"
                v-model="dealer.address.neighborhood"
                :error-messages="errors['address.neighborhood']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="dealer.address.state_id"
                :items="states"
                item-text="name"
                item-value="id"
                label="State"
                @change="cityByState($event)"
                :error-messages="errors['address.state_id']"
              ></v-select>
            </v-col>
            <v-col cols="12" md="3">
              <v-select
                :loading="loadingCities"
                v-model="dealer.address.city_id"
                :items="cities"
                item-text="name"
                item-value="id"
                label="City"
                :error-messages="errors['address.city_id']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Gallery</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col
                        v-for="(image, key) in images"
                        :key="key"
                        cols="6"
                        md="3"
                        sm="4"
                      >
                        <v-hover>
                          <template v-slot:default="{ hover }">
                            <v-img
                              :src="image"
                              alt="Logo"
                              aspect-ratio="2"
                              class="grey lighten-2 ma-2"
                            >
                              <v-fade-transition>
                                <v-overlay
                                  v-if="hover"
                                  absolute
                                  color="#036358"
                                >
                                  <v-btn
                                    rounded
                                    color="primary"
                                    @click="removeImage(key)"
                                  >
                                    Remove
                                  </v-btn>
                                </v-overlay>
                              </v-fade-transition>
                            </v-img>
                          </template>
                        </v-hover>
                      </v-col>
                    </v-row>
                    <v-btn class="ma-2 primary" @click="uploadImages">
                      <v-icon class="mr-2">mdi-plus</v-icon> Images
                    </v-btn>
                    <input
                      ref="uploaderImages"
                      class="d-none"
                      multiple
                      type="file"
                      accept="image/*"
                      @change="loadImages"
                    />
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row class="text-right">
            <v-col>
              <v-btn color="primary" @click="save()" class="mr-3">save</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      dealer: {
        address: {
          zipcode: ""
        },
        profile_path: "",
        images: []
      },
      logo: "",
      images: [],
      states: [],
      cities: [],
      isBusy: false,
      loadingCities: false,
      errors: {}
    };
  },
  methods: {
    uploadAvatar() {
      this.$refs.uploaderAvatar.click();
    },
    uploadImages() {
      this.$refs.uploaderImages.click();
    },
    removeImage(item) {
      this.images.splice(item, 1);
      console.log(item);
    },
    save() {
      this.isBusy = true;
      this.$http
        .put(`/dealers/${this.id}`, this.dealer)
        .then(() => {
          this.isBusy = false;
          this.$toasted.global.defaultSuccess({ msg: "Dealer Saved!!!" });
        })
        .catch(error => {
          this.isBusy = false;
          this.errors = error.response.data.errors;
          this.$toasted.global.defaultError({
            msg: error.response.data.message
          });
        });
    },
    cityByState(item) {
      this.loadingCities = true;
      this.dealer.address.city_id = null;
      this.cities = [];
      this.$http.get(`/cities/${item}`).then(res => {
        this.cities = res.data;
        this.loadingCities = false;
      });
    },
    loadAvatar(item) {
      this.getPreviewImage(item.target.files[0]).then(res => {
        this.dealer.profile_path = res.data.files.file;
        this.dealer.profile_url = res.data.files.file;
      });
    },
    loadImages(items) {
      this.dealer.images = [...items.target.files];

      [...items.target.files].map(item => {
        this.getPreviewImage(item).then(res =>
          this.images.push(res.data.files.file)
        );
      });
    },
    getPreviewImage(image) {
      let formData = new FormData();
      formData.append("file", image);
      return axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    }
  },
  computed: {
    setLogoDealer() {
      if (this.dealer.profile_url) {
        return this.dealer.profile_url;
      }
      return require("@/assets/site/dealer-logo-default.png");
    }
  },
  async created() {
    this.isBusy = !this.isBusy;
    await this.$http
      .get(`/dealers/${this.id}`)
      .then(res => (this.dealer = res.data))
      .catch(() => this.$router.push("/admin/404"));
    await this.$http.get(`/states`).then(res => {
      this.states = res.data;
      this.loadingCities = true;
    });
    await this.$http
      .get(`/cities/${this.dealer.address.state_id}`)
      .then(res => {
        this.cities = res.data;
        this.loadingCities = false;
      });
    this.isBusy = !this.isBusy;
  }
};
</script>
