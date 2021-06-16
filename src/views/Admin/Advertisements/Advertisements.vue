<template>
  <div>
    <h1>Advertisements</h1>
    <v-row class="ma-2" v-if="isDealer">
      <router-link to="/admin/advertisements/new" tag="div">
        <v-btn color="primary">New Advertisements</v-btn>
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
      { text: "", value: "img", sortable: false },
      { text: "Make", value: "make_name" },
      { text: "Model", value: "model_name" },
      { text: "Year", value: "year" },
      { text: "Engine", value: "engine" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    items: []
  }),
  methods: {
    edit(id) {
      this.$router.push(`/admin/advertisements/${id}`);
    },
    deleteItem(item) {
      this.$swal({
        text: `Confirm that you remove ${item.name}`,
        icon: "warning",
        showCancelButton: true
      }).then(data => {
        if (data.value) {
          this.$http
            .delete(`/advertisements/${item.id}`)
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
  computed: {
    isDealer() {
      return this.$store.state.user.company_type.type === "dealer";
    }
  },
  mounted() {
    this.isBusy = !this.isBusy;
    this.$http.get("/advertisements").then(res => {
      this.items = res.data;
      this.isBusy = !this.isBusy;
    });
  }
};
</script>
