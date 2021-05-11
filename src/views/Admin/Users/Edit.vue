<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card elevation="5" :loading="loading" :disabled="loading">
        <v-card-title><h2>Edit User</h2></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="3">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-img
                    :src="setAvatar"
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
              <v-text-field
                label="Name"
                v-model="user.name"
                :error-messages="errors.name"
              >
              </v-text-field>
              <v-text-field
                label="E-mail"
                v-model="user.email"
                :error-messages="errors.email"
                type="email"
              >
              </v-text-field>
              <v-text-field
                label="Password"
                v-model="user.password"
                :error-messages="errors.password"
                type="password"
              >
              </v-text-field>
              <v-text-field
                v-if="this.user.company.type === 'person'"
                label="Phone"
                v-model="user.phone"
                v-mask="'(###) ###-####'"
                :error-messages="errors.phone"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="this.user.company.type === 'person'">
            <v-col cols="12" md="1">
              <v-text-field
                label="Number"
                v-model="user.address.number"
                :error-messages="errors['address.number']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                label="Street"
                v-model="user.address.street"
                :error-messages="errors['address.street']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                label="Complement"
                v-model="user.address.complements"
                :error-messages="errors['address.complements']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-select
                :loading="loadingCities"
                v-model="user.address.city_id"
                :items="cities"
                item-text="name"
                item-value="id"
                label="City"
                :error-messages="errors['address.city_id']"
              ></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="user.address.state_id"
                :items="states"
                item-text="name"
                item-value="id"
                label="State"
                @change="cityByState($event)"
                :error-messages="errors['address.state_id']"
              ></v-select>
            </v-col>
            <v-col cols="12" md="1">
              <v-text-field
                label="Zipcode"
                v-model="user.address.zipcode"
                v-mask="'#####'"
                :error-messages="errors['address.zipcode']"
                @change="searchZipcode($event)"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row class="text-right">
            <v-col>
              <v-btn
                color="primary"
                @click="save()"
                class="mr-3"
                :loading="loading"
              >
                save
              </v-btn>
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
      user: {
        address: {
          zipcode: ""
        }
      },
      errors: {},
      loading: false,
      loadingCities: false
    };
  },
  methods: {
    uploadAvatar() {
      this.$refs.uploaderAvatar.click();
    },
    loadAvatar(item) {
      this.getPreviewImage(item.target.files[0]).then(res => {
        this.user.profile_url = res.data.files.file;
        this.user.profile_path = res.data.files.file;
      });
    },
    getPreviewImage(image) {
      let formData = new FormData();
      formData.append("file", image);
      return axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    },
    save() {
      this.loading = true;
      this.$http
        .put(`/users/${this.id}`, this.user)
        .then(() => {
          this.loading = false;
          this.$toasted.global.defaultSuccess({ msg: "User Saved!!!" });
        })
        .catch(error => {
          this.loading = false;
          this.errors = error.response.data.errors;
        });
    },
    searchZipcode(zipcode) {
      if (zipcode.length === 5) {
        this.$http
          .get(`/search-zipcode/${zipcode}`)
          .then(res => {
            this.user.address.state_id = res.data.city.state.id;
            this.cityByState(res.data.city.state.id);
            this.user.address.city_id = res.data.city.id;
          })
          .catch(() => {
            this.$toasted.global.defaultError({
              msg: "Zipcode not found"
            });
            this.user.address.state_id = null;
            this.user.address.city_id = null;
          });
      }
    },
    cityByState(item) {
      this.loadingCities = true;
      this.user.address.city_id = null;
      this.cities = [];
      this.$http.get(`/cities/${item}`).then(res => {
        this.cities = res.data;
        this.loadingCities = false;
      });
    }
  },
  computed: {
    setAvatar() {
      return this.user.profile_url
        ? this.user.profile_url
        : require("@/assets/site/avatar-default.png");
    }
  },
  async created() {
    this.loading = !this.loading;
    await this.$http
      .get(`/users/${this.id}`)
      .then(res => (this.user = res.data))
      .catch(() => this.$router.push("/404"));

    if (this.user.company.type === "person") {
      await this.$http.get(`/states`).then(res => {
        this.states = res.data;
        this.loadingCities = true;
      });

      await this.$http
        .get(`/cities/${this.user.address.state_id}`)
        .then(res => {
          this.cities = res.data;
          this.loadingCities = false;
        });
    }
    this.loading = !this.loading;
  }
};
</script>

<style></style>
