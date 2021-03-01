<template>
  <v-row align="center" justify="center">
    <v-col>
      <v-card elevation="5" :loading="loading">
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
      user: {},
      errors: {},
      loading: false
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
    }
  },
  computed: {
    setAvatar() {
      return this.user.profile_url
        ? this.user.profile_url
        : require("@/assets/site/avatar-default.png");
    }
  },
  mounted() {
    this.$http
      .get(`/users/${this.id}`)
      .then(res => (this.user = res.data))
      .catch(() => this.$router.push("/404"));
  }
};
</script>

<style></style>
