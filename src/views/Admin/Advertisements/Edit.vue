<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h2>Edit Advertisement</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <Loading :loading="loading"></Loading>
        <v-expansion-panels focusable v-if="!loading">
          <v-expansion-panel>
            <v-expansion-panel-header>Trim</v-expansion-panel-header>
            <v-expansion-panel-content>
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
                <v-col cols="12" sm="6">
                  <v-simple-table height="300" v-if="trim">
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
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Detail</v-expansion-panel-header>
            <v-expansion-panel-content>
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
                    type="number"
                    v-mask="'#'"
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
                    type="number"
                    v-mask="'#######'"
                    :error-messages="errors.miles"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="3">
                  <v-text-field
                    v-model="advertisement.vin_number"
                    label="VIN Number"
                    v-mask="'NNN NNNNNN NNNNNNNN'"
                    :error-messages="errors.vin_number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-text-field
                    v-model="advertisement.value"
                    label="Value"
                    v-mask="currencyMask"
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
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Gallery</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col
                  v-for="(image, key) in gallery"
                  :key="image.id"
                  cols="6"
                  md="3"
                  sm="4"
                >
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-img
                        :src="image.url"
                        aspect-ratio="2"
                        class="grey lighten-2"
                      >
                        <v-fade-transition>
                          <v-overlay v-if="hover" absolute color="#036358">
                            <v-btn
                              rounded
                              color="primary"
                              @click="removeImage(key)"
                            >
                              Remove
                            </v-btn>
                          </v-overlay>
                        </v-fade-transition>
                      </v-img>
                    </template>
                  </v-hover>
                </v-col>
              </v-row>
              <v-btn
                color="primary"
                small
                @click="uploadImages"
                :disabled="loadingImages"
                :loading="loadingImages"
              >
                Add More Pictures
              </v-btn>
              <input
                ref="uploaderImages"
                class="d-none"
                multiple
                type="file"
                accept="image/*"
                @change="loadImages"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col>
        <v-btn large color="success" @click="save()">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  CAR_TYPE,
  FUEL_TYPE,
  BODY_TYPE,
  TRANSMISSION_TYPE,
  COLOR,
  DRIVE_TYPE
} from "@/constants/variables.js";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import Loading from "@/components/Loading";
import axios from "axios";

export default {
  components: { Loading },
  props: ["id"],
  data() {
    return {
      currencyMask: createNumberMask({
        prefix: false,
        allowDecimal: true,
        includeThousandsSeparator: true,
        integerLimit: 8
      }),
      loading: true,
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
      advertisement: {},
      gallery: [],
      loadingImages: false,
      trim: null,
      errors: {},
      search: null
    };
  },
  methods: {
    uploadImages() {
      this.$refs.uploaderImages.click();
    },
    async loadImages(items) {
      this.loadingImages = true;
      await [...items.target.files].map(item => {
        this.getPreviewImage(item).then(res => {
          this.gallery.push({
            url: res.data.files.file,
            file: item
          });
          this.loadingImages = false;
        });
      });
    },
    getPreviewImage(image) {
      let formData = new FormData();
      formData.append("file", image);
      return axios.post("https://httpbin.org/post", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
    },
    searchModelsByMake(make) {
      this.$http
        .get(`/model-by-make?make=${make}`)
        .then(res => (this.models = res.data));
      this.advertisement.car_model_id = "";
      this.advertisement.year = "";
      this.advertisement.car_model_description_id = "";
      this.advertisement.body_type = "";
      this.advertisement.trim = "";
      this.trim = null;
    },
    searchYears() {
      this.$http
        .get(`/years-by-model?model=${this.advertisement.car_model_id}`)
        .then(res => (this.years = res.data));
      this.advertisement.year = "";
      this.advertisement.car_model_description_id = "";
      this.advertisement.body_type = "";
      this.advertisement.trim = "";
      this.trim = null;
    },
    searchTrim() {
      let advertisement = this.advertisement;
      this.$http
        .get(
          `/search-trim?make=${advertisement.car_make_id}&model=${advertisement.car_model_id}&year=${advertisement.year}`
        )
        .then(res => (this.trims = res.data));
      this.advertisement.trim = "";
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
    removeImage(item) {
      this.gallery.splice(item, 1);
    },
    removeFeature(item) {
      this.advertisement.features.splice(
        this.advertisement.features.indexOf(item),
        1
      );
    },
    textByVariables(values, filter) {
      let value = values.filter(item => item.value === filter);
      return value[0].text;
    },
    async save() {
      this.loading = !this.loading;
      const formData = this.imagesFormData();
      await this.$http
        .post(`/gallery-advertisement/${this.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => (this.gallery = res.data));
      await this.$http
        .put(`/advertisements/${this.id}`, this.advertisement)
        .then(() =>
          this.$toasted.global.defaultSuccess({ msg: "Advertisement Saved!!!" })
        )
        .catch(error => {
          this.errors = error.response.data.errors;
          this.$toasted.global.defaultError({
            msg: error.response.data.message
          });
        });
      this.loading = !this.loading;
    },
    imagesFormData() {
      let formData = new FormData();
      this.gallery.map((item, key) => {
        formData.append(`gallery[${key}][file]`, item.file ? item.file : "");
        formData.append(`gallery[${key}][path]`, item.path ? item.path : "");
      });
      return formData;
    }
  },
  async created() {
    await this.$http
      .get(`/advertisements/${this.id}`)
      .then(res => {
        this.advertisement = res.data;
        this.gallery = [...res.data.gallery];
      })
      .catch(() => this.$router.push("/admin/404"));
    await this.$http.get("/all-makes").then(res => (this.makes = res.data));
    await this.$http
      .get(`/model-by-make?make=${this.advertisement.car_make_id}`)
      .then(res => (this.models = res.data));
    await this.$http
      .get(`/years-by-model?model=${this.advertisement.car_model_id}`)
      .then(res => (this.years = res.data));
    await this.$http
      .get(
        `/search-trim?model=${this.advertisement.car_model_id}&year=${this.advertisement.year}`
      )
      .then(res => (this.trims = res.data));
    await this.$http
      .get(
        `/car-model-description/${this.advertisement.car_model_description_id}`
      )
      .then(res => (this.trim = res.data));
    this.loading = !this.loading;
  }
};
</script>
