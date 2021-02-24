<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card elevation="8" :loading="loading">
              <v-card-text class="d-flex justify-center py-10">
                <div v-if="success">
                  <h1 style="color: green">{{ message }}</h1>
                </div>
                <div v-if="error">
                  <h1 style="color: red">{{ message }}</h1>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      message: "...",
      success: false,
      error: false,
      loading: false
    };
  },
  created() {
    const token = this.$route.query.token;
    const user_id = this.$route.query.user_check;

    if (typeof token === "undefined" || typeof user_id === "undefined") {
      return false;
    }
    this.loading = true;

    this.$http
      .get(`/verify-token/${user_id}?token=${token}`)
      .then(() => {
        this.message = "E-mail verified!!";
        this.success = true;
        this.loading = false;
      })
      .catch(error => {
        this.message = error.response.data.message;
        this.error = true;
        this.loading = false;
      });
  }
};
</script>
