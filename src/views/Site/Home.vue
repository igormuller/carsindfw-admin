<template>
  <v-app id="inspire">
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <h1>Home Site</h1>
        </v-row>
        <v-row align="center" justify="center">
          <router-link to="/admin" tag="div">
            <v-btn color="primary">Admin</v-btn>
          </router-link>
        </v-row>
        <v-row>
          <v-card class="mt-4 mx-auto">
            <v-card-title><h4>Title</h4></v-card-title>
            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>
                mdi-clock
              </v-icon>
              <span class="caption grey--text font-weight-light">
                last registration 26 minutes ago
              </span>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
