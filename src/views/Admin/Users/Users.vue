<template>
  <h1>Users</h1>
  <!-- <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <h4 class="title">Users Lists</h4>
            <p class="category">Select one to edit</p>
          </md-card-header>
          <md-card-content>
            <router-link to="/users/new">
              <md-button class="md-raised md-primary" v-b-modal.new-user>
                New User
              </md-button>
            </router-link>
            <b-table hover :items="items" :fields="fields" :busy="isBusy">
              <template v-slot:table-busy>
                <div class="text-center text-info my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
              <template v-slot:cell(verified)="data">
                {{ data.item.verified !== "" ? "Yes" : "No" }}
              </template>
              <template v-slot:cell(actions)="data">
                <router-link :to="`/users/${data.item.id}`">
                  <i
                    class="fas fa-pencil-alt"
                    v-b-tooltip.hover
                    title="Edit User"
                  ></i>
                </router-link>
                <a href="#" @click="removeUser(data.item, data.index)">
                  <i
                    class="far fa-trash-alt"
                    v-b-tooltip.hover
                    title="Remove User"
                  ></i>
                </a>
              </template>
            </b-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      isBusy: false,
      fields: [
        "name",
        { key: "email", label: "E-mail" },
        "verified",
        "actions"
      ],
      items: []
    };
  },
  methods: {
    removeUser(item, index) {
      this.$swal({
        text: `Confirm that you remove ${item.name}`,
        buttons: true,
        dangerMode: true
      }).then(data => {
        if (data) {
          this.$http
            .delete(`/users/${item.id}`)
            .then(res => {
              this.$notify({
                message: res.data,
                horizontalAlign: "center",
                verticalAlign: "top",
                type: "success"
              });
              this.items.splice(index, 1);
            })
            .catch(error => {
              this.$notify({
                message: error.response.data,
                icon: "add_alert",
                horizontalAlign: "center",
                verticalAlign: "top",
                type: "danger"
              });
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
