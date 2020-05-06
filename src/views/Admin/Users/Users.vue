<template>
  <div>
    <h1>Users</h1>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
      :loading="isBusy"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:item.verified="{ item }">
        {{ item.email_verified_at !== null ? "Verified" : "Not Verified" }}
      </template>
    </v-data-table>
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
    deleteItem(item) {
      this.$swal({
        text: `Confirm that you remove ${item.name}`,
        buttons: true,
        dangerMode: true
      }).then(data => {
        if (data) {
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
