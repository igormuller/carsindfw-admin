<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    name="name"
                    type="text"
                    v-model="user.name"
                  />
                  <v-text-field
                    label="E-mail"
                    name="email"
                    type="email"
                    v-model="user.email"
                  />
                  <v-text-field
                    label="Password"
                    name="password"
                    type="password"
                    v-model="user.password"
                  />
                  <v-text-field
                    label="Document"
                    name="document"
                    type="text"
                    v-model="user.document"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <span class="caption pl-4">
                  If you have login then
                  <router-link to="/login">
                    Login
                  </router-link>
                </span>
                <v-spacer />
                <v-btn color="primary" @click="sendLogin()">Register</v-btn>
              </v-card-actions>
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
      user: {
        email: null,
        password: null,
        name: null,
        document: null,
        type: "person"
      },
      errors: {},
      radio: null,
      options: [
        { text: "Person", value: "person" },
        { text: "Dealer", value: "dealer" }
      ]
    };
  },
  methods: {
    sendRegister() {
      this.$http
        .post("/new-person", this.user)
        .then(() => this.$router.push("/login"))
        .catch(error => this.showErrors(error.response.data.errors));
    },
    showErrors(validation) {
      if (validation !== "undefined") {
        this.errors = validation;
      }
    }
  }
};
</script>
