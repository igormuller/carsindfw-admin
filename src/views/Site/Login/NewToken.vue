<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title class="white--text">
                  Generate New Token
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form @keydown.enter="sendToken()">
                  <v-text-field
                    label="E-mail"
                    name="email"
                    prepend-icon="email"
                    type="email"
                    v-model="email"
                    :error-messages="message"
                    :loading="loading"
                  />
                </form>
              </v-card-text>
              <v-card-actions class="d-flex justify-end">
                <span class="caption pl-4">
                  Return to
                  <router-link to="/login">
                    Login
                  </router-link>
                </span>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="sendToken()"
                  class="mb-3 mr-3"
                  :loading="loading"
                >
                  Generate
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      loading: false
    };
  },
  methods: {
    sendToken() {
      this.loading = true;
      this.message = "";
      if (this.email === "") {
        this.message = "E-mail is required";
        this.loading = false;
        return false;
      }

      this.$http
        .get(`/new-verify-token/${this.email}`)
        .then(() => {
          this.$toasted.global.defaultSuccess({ msg: "Token E-mail sended!" });
          this.$router.push("/login");
          this.loading = false;
        })
        .catch(error => {
          this.message = error.response.data.message;
          this.loading = false;
        });
    }
  }
};
</script>
