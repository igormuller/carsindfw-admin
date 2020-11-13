<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            Select Your Trim
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 2" step="2">
            More Details
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">
            Photos by Car
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <Loading :loading="loading"></Loading>
            <v-card class="mb-12" v-if="!loading">
              <v-row>
                <v-col cols="12" sm="5">
                  <v-col>
                    <v-autocomplete
                      v-model="advertisement.car_make_id"
                      :items="makes"
                      item-text="name"
                      item-value="id"
                      label="Make"
                      clearable
                      :error-messages="errors.car_make_id"
                      @change="searchModelsByMake(advertisement.car_make_id)"
                    ></v-autocomplete>
                  </v-col>
                  <v-col>
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
                  <v-col>
                    <v-select
                      v-model="advertisement.year"
                      :items="years"
                      label="Year"
                      :error-messages="errors.year"
                      @change="searchTrim()"
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-select
                      v-model="advertisement.car_model_description_id"
                      :items="trims"
                      item-text="trim"
                      item-value="id"
                      label="Trim"
                      clearable
                      :error-messages="errors.car_model_description_id"
                      @change="selectTrim()"
                    ></v-select>
                  </v-col>
                </v-col>
                <v-divider vertical inset class="mb-6"></v-divider>
                <v-col cols="12" sm="6" v-if="trim">
                  <v-simple-table height="300">
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td>Body Type</td>
                          <td>
                            {{ textByVariables(body_types, trim.body_type) }}
                          </td>
                        </tr>
                        <tr>
                          <td>Seats</td>
                          <td>{{ trim.seats }}</td>
                        </tr>
                        <tr>
                          <td>Transmission</td>
                          <td>
                            {{ trim.transmission }} -
                            {{
                              textByVariables(
                                transmission_types,
                                trim.transmission_type
                              )
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td>Drive Type</td>
                          <td>{{ trim.drive_type }}</td>
                        </tr>
                        <tr>
                          <td>Fuel Type</td>
                          <td>
                            {{ textByVariables(fuel_type, trim.fuel_type) }}
                          </td>
                        </tr>
                        <tr>
                          <td>Engine</td>
                          <td>
                            {{ trim.engine_size }} -
                            {{ trim.cylinder }}
                            {{ trim.cylinder_type }} - {{ trim.horsepower }}Hp
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-card>
            <v-btn color="primary" @click="step = 2" :disabled="trim === null">
              Next
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <Loading :loading="loading"></Loading>
            <v-card class="mb-12" v-if="!loading">
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
                <v-col cols="12" sm="2">
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
                <v-col cols="12" sm="2">
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
                <v-col cols="12" sm="3">
                  <v-text-field
                    v-model="advertisement.vin_number"
                    label="VIN Number"
                    required
                    :error-messages="errors.vin_number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
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
                  <v-combobox
                    v-model="advertisement.features"
                    chips
                    label="Features"
                    multiple
                    hide-selected
                    hint="Inform feature and press tab or enter"
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
                <v-col>
                  <v-textarea
                    v-model="advertisement.description"
                    label="Description"
                    :error-messages="errors.description"
                    rows="3"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card>
            <v-btn color="primary" @click="save()">
              Save Details & Next
            </v-btn>
            <v-btn text @click="step = 1">Preview</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <Loading :loading="loading"></Loading>
            <v-card class="mb-12" v-if="!loading">
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
            </v-card>
            <v-btn color="primary" @click="saveGallery()">
              Continue
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Loading from "@/components/Loading";
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
    vueDropzone: vue2Dropzone,
    Loading
  },
  data() {
    return {
      loading: true,
      advertisement_id: null,
      advertisement: {
        car_make_id: "",
        car_model_id: "",
        car_model_description_id: null,
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
      step: 1,
      car_type: CAR_TYPE,
      fuel_type: FUEL_TYPE,
      body_types: BODY_TYPE,
      transmission_types: TRANSMISSION_TYPE,
      colors: COLOR,
      drive_type: DRIVE_TYPE,
      years: [],
      trims: [],
      makes: [],
      models: [],
      errors: {},
      files: [],
      trim: null,
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
    changeLoading() {
      this.loading = !this.loading;
    },
    afterComplete(item) {
      this.images.push(item);
    },
    searchModelsByMake(make) {
      this.$http
        .get(`/model-by-make?make=${make}`)
        .then(res => (this.models = res.data));
      this.advertisement.car_model_id = "";
      this.advertisement.year = "";
      this.advertisement.car_model_description_id = "";
      this.advertisement.body_type = "";
      this.trim = null;
    },
    searchYears() {
      this.$http
        .get(`/years-by-model?model=${this.advertisement.car_model_id}`)
        .then(res => (this.years = res.data));
      this.advertisement.year = "";
      this.advertisement.car_model_description_id = "";
      this.advertisement.body_type = "";
      this.trim = null;
    },
    searchTrim() {
      let advertisement = this.advertisement;
      this.$http
        .get(
          `/search-trim?make=${advertisement.car_make_id}&model=${advertisement.car_model_id}&year=${advertisement.year}`
        )
        .then(res => (this.trims = res.data));
      this.trim = null;
    },
    async selectTrim() {
      let trim = await this.trims.filter(
        item => item.id === this.advertisement.car_model_description_id
      );
      this.advertisement.trim = trim[0].trim;
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
      this.advertisement.features.splice(
        this.advertisement.features.indexOf(item),
        1
      );
    },
    async save() {
      this.changeLoading();
      await this.$http
        .post("/advertisements", this.advertisement)
        .then(res => {
          this.step = 3;
          this.advertisement_id = res.data.id;
        })
        .catch(error => (this.errors = error.response.data.errors));
      this.changeLoading();
    },
    async saveGallery() {
      this.changeLoading();
      let formData = new FormData();
      formData.append("advertisement_id", this.advertisement_id);
      this.images.map((item, key) =>
        formData.append("files[" + key + "]", item)
      );

      await this.$http
        .post("/gallery", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => this.$router.push("/admin/advertisements"));
      this.changeLoading();
    },
    textByVariables(values, filter) {
      let value = values.filter(item => item.value === filter);
      return value[0].text;
    }
  },
  async created() {
    await this.$http.get("/all-makes").then(res => (this.makes = res.data));
    this.changeLoading();
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
