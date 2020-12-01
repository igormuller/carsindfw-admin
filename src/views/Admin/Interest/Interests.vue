<template>
  <v-card>
    <v-card-title>
      Interests
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="interests"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <!-- <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon> -->
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          <div>{{ editedItem.make_name }} - {{ editedItem.model_name }}</div>
          <div>
            <v-btn
              target="_blank"
              text
              :to="`/car-detail/${editedItem.advertisement_id}`"
            >
              Advertisement
            </v-btn>
          </div>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div class="mb-3">
              {{ editedItem.name }}
            </div>
            <div class="d-flex mb-3">
              <div class="mr-2">{{ editedItem.email }}</div>
              <div class="mr-2">-</div>
              <div class="mr-2">{{ editedItem.phone }}</div>
            </div>
            <div class="mb-3">{{ editedItem.description }}</div>
            <div>
              <v-select
                v-model="editedItem.status"
                :items="status"
                label="Status"
              ></v-select>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    interests: [],
    dialog: false,
    editedItem: {},
    editedIndex: -1,
    search: "",
    status: [
      { text: "To Answer", value: "wait_answer" },
      { text: "Answered", value: "answered" }
    ],
    headers: [
      { text: "Make", value: "make_name" },
      { text: "Model", value: "model_name" },
      { text: "Name", value: "name" },
      { text: "E-mail", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false }
    ]
  }),
  methods: {
    editItem(item) {
      this.editedIndex = this.interests.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    save() {
      this.$http
        .put(`/interests/${this.editedItem.id}`, this.editedItem)
        .then(() => {
          Object.assign(this.interests[this.editedIndex], this.editedItem);
          this.$toasted.global.defaultSuccess({ msg: "Interest Saved!!!" });
        });
      this.close();
    }
  },
  created() {
    this.$http.get(`/interests`).then(res => (this.interests = res.data));
  }
};
</script>
