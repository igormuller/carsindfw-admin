<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card elevation="5" :loading="isBusy">
        <v-card-title><h2>Edit Dealer</h2></v-card-title>
        <v-card-text>
          <form @keydown.enter="save()">
            <v-container>
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
              <v-row>
                <v-col cols="12" md="1">
                  <v-text-field
                    label="Zipcode"
                    v-model="dealer.address.zipcode"
                    :error-messages="errors.zipcode"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field
                    label="Street"
                    v-model="dealer.address.street"
                    :error-messages="errors.street"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="1">
                  <v-text-field
                    label="Number"
                    v-model="dealer.address.number"
                    :error-messages="errors.number"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    label="Neighborhood"
                    v-model="dealer.neighborhood"
                    :error-messages="errors.neighborhood"
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
                  ></v-select>
                </v-col>
                <v-col cols="12" md="2">
                  <v-select
                    v-model="dealer.address.city_id"
                    :items="cities"
                    item-text="name"
                    item-value="id"
                    label="City"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3">
                  <v-file-input
                    accept="image/png, image/jpeg"
                    prepend-icon="mdi-camera"
                    label="Your Logo"
                    @change="avatar($event)"
                  ></v-file-input>
                  <v-img
                    :src="logo"
                    alt="Logo"
                    height="150"
                    contain
                    v-if="loadingLogo || logo"
                  >
                    <template v-slot:default v-if="loadingLogo">
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
                <v-col cols="12" md="9">
                  <v-file-input
                    chips
                    multiple
                    small-chips
                    truncate-length="11"
                    accept="image/png, image/jpeg"
                    prepend-icon="mdi-camera"
                    label="Your Pictures"
                    @change="loadImages($event)"
                    @click:clear="clearImages()"
                  ></v-file-input>
                  <v-row>
                    <v-col
                      v-for="(image, key) in images"
                      :key="key"
                      class="d-flex child-flex"
                      cols="4"
                    >
                      <v-img :src="image" height="175" contain></v-img>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </form>
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
      loadingLogo: false,
      images: [],
      states: [],
      cities: [],
      isBusy: false,
      errors: {}
    };
  },
  methods: {
    save() {
      this.$http
        .put(`/dealers/${this.id}`, this.dealer)
        .then(() => this.$router.push("/admin/dealers"))
        .catch(error => (this.errors = error.response.data.errors));
    },
    cityByState(item) {
      this.dealer.address.city_id = null;
      this.$http.get(`/cities/${item}`).then(res => (this.cities = res.data));
    },
    avatar(item) {
      this.loadingLogo = !this.loadingLogo;
      this.dealer.profile_path = item;
      this.getPreviewImage(item).then(res => (this.logo = res.data.files.file));
      this.loadingLogo = !this.loadingLogo;
    },
    loadImages(items) {
      this.images = [];
      this.dealer.images = items;

      items.map(item => {
        this.getPreviewImage(item).then(res =>
          this.images.push(res.data.files.file)
        );
      });
    },
    clearImages() {
      this.images = [];
    },
    getPreviewImage(image) {
      let formData = new FormData();
      formData.append("file", image);
      return axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    }
  },
  async created() {
    this.isBusy = !this.isBusy;
    await this.$http
      .get(`/dealers/${this.id}`)
      .then(res => (this.dealer = res.data))
      .catch(() => this.$router.push("/admin/404"));
    await this.$http.get(`/states`).then(res => (this.states = res.data));
    await this.$http
      .get(`/cities/${this.dealer.address.state_id}`)
      .then(res => {
        this.cities = res.data;
      });
    this.isBusy = !this.isBusy;
  }
};
</script>
