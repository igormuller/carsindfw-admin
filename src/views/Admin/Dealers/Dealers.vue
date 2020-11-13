<template>
  <div>
    <h1>Dealers</h1>
    <v-row class="ma-2">
      <router-link to="/admin/dealers/new" tag="div">
        <v-btn color="primary">New Dealer</v-btn>
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
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    isBusy: false,
    headers: [
      { text: "Name", value: "name" },
      { text: "Phone", value: "phone", sortable: false },
      { text: "E-mail", value: "email", sortable: false },
      { text: "City", value: "address.city.name" },
      { text: "State", value: "address.state.name" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    items: []
  }),
  methods: {
    edit(id) {
      this.$router.push(`/admin/dealers/${id}`);
    },
    deleteItem(item) {
      this.$swal({
        text: `Confirm that you remove ${item.name}`,
        icon: "warning",
        showCancelButton: true
      }).then(data => {
        if (data.value) {
          this.$http
            .delete(`/dealers/${item.id}`)
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
    this.$http.get("/dealers").then(res => {
      this.items = res.data;
      this.isBusy = !this.isBusy;
    });
  }
};
</script>
