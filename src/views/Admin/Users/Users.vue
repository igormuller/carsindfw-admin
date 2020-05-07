<template>
  <div>
    <h1>Users</h1>
    <v-row class="ma-2">
      <router-link to="/admin/users/new" tag="div">
        <v-btn color="primary">New User</v-btn>
      </router-link>
    </v-row>
    <v-row class="ma-2" no-gutters>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-3"
          :loading="isBusy"
        >
          <template v-slot:item.actions="{ item }">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon small v-on="on" class="mr-2" @click="edit(item.id)">
                  mdi-pencil
                </v-icon>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon small v-on="on" @click="deleteItem(item)">
                  mdi-delete
                </v-icon>
              </template>
              <span>Remove</span>
            </v-tooltip>
          </template>
          <template v-slot:item.verified="{ item }">
            {{ item.email_verified_at !== null ? "Verified" : "Not Verified" }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "E-mail", value: "email" },
        { text: "Verified", value: "verified" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [],
      isBusy: false
    };
  },
  methods: {
    edit(id) {
      this.$router.push(`/admin/users/${id}`);
    },
    deleteItem(item) {
      this.$swal({
        text: `Confirm that you remove ${item.name}`,
        icon: "warning",
        showCancelButton: true
      }).then(data => {
        if (data.value) {
          this.$http
            .delete(`/users/${item.id}`)
            .then(res => {
              this.$toasted.global.defaultSuccess({ msg: res.data });
              this.items.splice(this.items.indexOf(item), 1);
            })
            .catch(error => {
              this.$toasted.global.defaultError({ msg: error.response.data });
            });
        }
      });
    }
  },
  mounted() {
    this.isBusy = !this.isBusy;
    this.$http.get("/users").then(res => {
      this.items = res.data;
      this.isBusy = !this.isBusy;
    });
  }
};
</script>

<style>
a {
  padding: 10px 0px 0px 10px;
}
</style>
