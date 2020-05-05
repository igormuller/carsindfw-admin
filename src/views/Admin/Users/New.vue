<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <h4 class="title">New User</h4>
            <p class="category">.</p>
          </md-card-header>
          <md-card-content>
            <form @keydown.enter="save()">
              <md-field>
                <label>Name</label>
                <md-input v-model="user.name" type="text"></md-input>
                <form-errors :errors="errors.name" />
              </md-field>
              <md-field>
                <label>E-mail</label>
                <md-input v-model="user.email" type="email"></md-input>
                <form-errors :errors="errors.email" />
              </md-field>
              <md-field>
                <label>Password</label>
                <md-input v-model="user.password" type="password"></md-input>
                <form-errors :errors="errors.password" />
              </md-field>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-primary" @click="save()">
                  Save
                </md-button>
              </div>
            </form>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import FormErrors from "@/components/Forms/Errors.vue";
export default {
  components: {
    FormErrors
  },
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
        .then(res => this.$router.push("/users"))
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

<style></style>