<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-card class="elevation-5" flat :loading="loading">
        <v-card-title><h2>New Advertisement</h2></v-card-title>
        <v-divider></v-divider>
        <v-card-text v-if="!loading">
          <form @keydown.enter="save()">
            <v-row>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.type"
                  :items="car_type"
                  label="New/Used"
                  clearable
                  :error-messages="errors.type"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-autocomplete
                  v-model="advertisement.car_make_id"
                  :items="makes"
                  item-text="name"
                  item-value="id"
                  label="Brand"
                  clearable
                  :error-messages="errors.car_make_id"
                  @change="searchModelsByMake(advertisement.car_make_id)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="3">
                <v-autocomplete
                  v-model="advertisement.car_model_id"
                  :items="models"
                  item-text="name"
                  item-value="id"
                  label="Model"
                  clearable
                  :error-messages="errors.car_model_id"
                  @change="searchYears()"
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-title>
                        Select a make first
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.year"
                  :items="years"
                  label="Year"
                  :error-messages="errors.year"
                  @change="searchTrim()"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="5">
                <v-select
                  v-model="advertisement.trim"
                  :items="trims"
                  item-text="trim"
                  item-value="id"
                  label="Trim"
                  clearable
                  :error-messages="errors.trim"
                  @change="selectTrim(advertisement.trim)"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.body_type"
                  :items="body_types"
                  label="Body Type"
                  clearable
                  :error-messages="errors.body_type"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.transmission"
                  :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  label="Transmission Speed"
                  clearable
                  :error-messages="errors.transmission"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  v-model="advertisement.transmission_type"
                  :items="transmission_types"
                  label="Transmission Type"
                  clearable
                  :error-messages="errors.transmission_type"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.engine"
                  label="Engine"
                  required
                  readonly
                  :error-messages="errors.engine"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.drive_type"
                  :items="drive_type"
                  label="Drive Type"
                  clearable
                  :error-messages="errors.drive_type"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.fuel_type"
                  :items="fuel_type"
                  label="Fuel Type"
                  clearable
                  :error-messages="errors.fuel_type"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="1">
                <v-text-field
                  v-model="advertisement.seats"
                  label="Seats"
                  required
                  max="15"
                  min="2"
                  type="number"
                  :error-messages="errors.seats"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="1">
                <v-text-field
                  v-model="advertisement.doors"
                  label="Doors"
                  required
                  max="15"
                  min="2"
                  type="number"
                  :error-messages="errors.doors"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.color_ext"
                  :items="colors"
                  label="Exterior Color"
                  clearable
                  :error-messages="errors.color_ext"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2">
                <v-select
                  v-model="advertisement.color_int"
                  :items="colors"
                  label="Interior Color"
                  clearable
                  :error-messages="errors.color_int"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.vin_number"
                  label="VIN Number"
                  required
                  :error-messages="errors.vin_number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.miles"
                  label="Miles"
                  required
                  type="number"
                  :error-messages="errors.miles"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-combobox
                  v-model="features"
                  chips
                  clearable
                  label="Features"
                  multiple
                >
                  <template v-slot:selection="{ attrs, item }">
                    <v-chip
                      v-bind="attrs"
                      close
                      @click:close="removeFeature(item)"
                    >
                      <strong>{{ item }}</strong>
                      &nbsp;
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.value"
                  label="Value"
                  required
                  type="number"
                  prefix="$"
                  :error-messages="errors.value"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="advertisement.description"
                  label="Description"
                  :error-messages="errors.description"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <vue-dropzone
                  id="dropzone"
                  :useCustomSlot="true"
                  :options="dropzoneOptions"
                  @vdropzone-complete="afterComplete"
                >
                  <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">
                      Drag and drop to upload content!
                    </h3>
                    <div class="subtitle">
                      ...or click to select a file from your computer
                    </div>
                  </div>
                </vue-dropzone>
              </v-col>
            </v-row>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-row class="text-right">
            <v-col>
              <v-btn color="primary" @click="save()" class="mr-3">save</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import {
  CAR_TYPE,
  FUEL_TYPE,
  BODY_TYPE,
  TRANSMISSION_TYPE,
  COLOR,
  DRIVE_TYPE
} from "@/constants/variables.js";

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      loading: true,
      advertisement: {
        car_make_id: "",
        car_model_id: "",
        type: "",
        year: "",
        trim: "",
        body_type: "",
        transmission: "",
        transmission_type: "",
        engine: "",
        drive_type: "",
        fuel_type: "",
        seats: "",
        doors: "",
        color_ext: "",
        color_int: "",
        vin_number: "",
        miles: "",
        features: "",
        value: "",
        description: ""
      },
      car_type: CAR_TYPE,
      fuel_type: FUEL_TYPE,
      body_types: BODY_TYPE,
      transmission_types: TRANSMISSION_TYPE,
      colors: COLOR,
      drive_type: DRIVE_TYPE,
      features: [],
      years: [],
      trims: [],
      makes: [],
      models: [],
      errors: {},
      files: [],
      trim: {},
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png"
      },
      images: []
    };
  },
  methods: {
    afterComplete(item) {
      this.images.push(item);
    },
    searchModelsByMake(make) {
      this.$http
        .get(`/model-by-make?make=${make}`)
        .then(res => (this.models = res.data));
      this.advertisement.car_model_id = "";
      this.advertisement.year = "";
      this.advertisement.trim = "";
      this.advertisement.body_type = "";
    },
    searchYears() {
      this.$http
        .get(`/years-by-model?model=${this.advertisement.car_model_id}`)
        .then(res => (this.years = res.data));
      this.advertisement.year = "";
      this.advertisement.trim = "";
      this.advertisement.body_type = "";
    },
    searchTrim() {
      let advertisement = this.advertisement;
      this.$http
        .get(
          `/search-trim?make=${advertisement.car_make_id}&model=${advertisement.car_model_id}&year=${advertisement.year}`
        )
        .then(res => (this.trims = res.data));
    },
    async selectTrim(id) {
      let trim = await this.trims.filter(item => item.id === id);
      this.advertisement.body_type = trim[0].body_type;
      this.advertisement.seats = trim[0].seats;
      this.advertisement.drive_type = trim[0].drive_type;
      this.advertisement.transmission = trim[0].transmission;
      this.advertisement.transmission_type = trim[0].transmission_type;
      this.advertisement.fuel_type = trim[0].fuel_type;
      this.advertisement.engine = `${trim[0].engine_size}L ${trim[0].cylinder}${trim[0].cylinder_type} ${trim[0].horsepower}hp`;
      this.trim = trim[0];

      return true;
    },
    removeFeature(item) {
      this.features.splice(this.features.indexOf(item), 1);
    },
    save() {
      // let formData = new FormData();
      // this.images.map((item, key) =>
      //   formData.append("files[" + key + "]", item)
      // );
      this.$http
        .post("/advertisements", this.advertisement)
        .then(() => this.$router.push("/admin/advertisements"))
        .catch(error => (this.errors = error.response.data.errors));
    }
  },
  async created() {
    await this.$http.get("/all-makes").then(res => (this.makes = res.data));
    this.loading = !this.loading;
  }
};
</script>

<style scoped>
.dropzone-custom-content {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 40px;
  color: #00205b;
}

.subtitle {
  color: #bf0d3e;
}
</style>
