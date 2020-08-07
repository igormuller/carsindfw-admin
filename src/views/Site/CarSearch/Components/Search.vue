<template>
  <v-card color="#E5E5E5">
    <v-card-title style="color:#00205b">Chose Your Next Car</v-card-title>
    <v-card-text>
      <v-text-field
        label="Category"
        outlined
        dense
        required
        background-color="white"
      ></v-text-field>
      <v-select
        v-model="dataSearch.type"
        outlined
        dense
        :items="['New', 'Used']"
        label="New/Used"
        clearable
        background-color="white"
      ></v-select>
      <v-autocomplete
        v-model="dataSearch.make"
        outlined
        dense
        :items="makes"
        item-text="name"
        item-value="id"
        label="Brand"
        clearable
        background-color="white"
      ></v-autocomplete>
      <v-autocomplete
        v-model="dataSearch.model"
        outlined
        dense
        :items="models"
        item-text="name"
        item-value="id"
        label="Model"
        clearable
        background-color="white"
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Select a make first
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-autocomplete>
      <div class="d-flex">
        <v-text-field
          label="Year Start"
          outlined
          dense
          required
          background-color="white"
        ></v-text-field>
        <v-text-field
          label="Year End"
          outlined
          dense
          required
          background-color="white"
        ></v-text-field>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Search",
  props: ['dataSearch'],
  data: () => ({
    makes: [],
    make: null,
    models: [],
    model: null,
  }),
  watch: {
    dataSearch: function(val) {
      console.log(this.dataSearch)
      let params = {
        make: val
      };
      this.$http
        .get("/model-by-make", { params })
        .then(res => (this.models = res.data));
    }
  },
  created() {
    this.$http.get("/all-makes").then(res => (this.makes = res.data));
  }
};
</script>
