<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-card class="elevation-5" color="grey lighten-4" flat>
        <v-card-title><h2>New User</h2></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <form @keydown.enter="save()">
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
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        profile: null
      },
      errors: {}
    };
  },
  methods: {
    save() {
      this.$http
        .post("/users", this.user)
        .then(() => this.$router.push("/admin/users"))
        .catch(error => (this.errors = error.response.data.errors));
    }
  },
  mounted() {
    if (this.$store.state.user.company_type.type !== "dealer") {
      this.$router.push("/admin/404");
    }
  }
};
</script>

<style></style>
