<template>
  <v-row>
    <v-col>
      <v-card :loading="loading" elevation="6" shaped>
        <div class="pa-5" v-if="!send">
          <v-text-field
            v-model="contact.name"
            label="Name"
            :error-messages="errors.name"
          ></v-text-field>
          <v-text-field
            v-model="contact.phone"
            label="Phone"
            v-mask="'###-###-####'"
            :error-messages="errors.phone"
          ></v-text-field>
          <v-text-field
            v-model="contact.email"
            label="E-mail"
            type="email"
            :error-messages="errors.email"
          ></v-text-field>
          <v-textarea
            v-model="contact.message"
            label="Message"
            :error-messages="errors.message"
          ></v-textarea>
          <div class="d-flex flex-column align-end">
            <v-btn
              color="#00205b"
              class="white--text ma-3"
              :disabled="loading"
              @click="sendContact()"
            >
              Send
            </v-btn>
          </div>
        </div>
        <div
          v-else
          class="pa-12 d-flex flex-column align-center justify-center"
          style="color:#00205b"
        >
          <h2>Thank you for contact us!!</h2>
        </div>
      </v-card>
    </v-col>
    <v-col class="d-flex flex-column align-center justify-center">
      <div>
        <h2 style="font-family: Racing Sans One; color:#00205b">
          Passionate about cars!
        </h2>
      </div>
      <div class="mt-8"><v-icon>mdi-email</v-icon> contato@carsindfw.com</div>
      <div class="mt-8"><v-icon>mdi-phone</v-icon> +1 (469) 456-4082</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    contact: {
      name: "",
      phone: "",
      email: "",
      message: ""
    },
    send: false,
    loading: false,
    errors: {}
  }),
  methods: {
    async sendContact() {
      this.loading = true;
      await this.$http
        .post("/contact-us", this.contact)
        .then(() => (this.send = true))
        .catch(error => (this.errors = error.response.data.errors));
      this.loading = false;
    }
  }
};
</script>
