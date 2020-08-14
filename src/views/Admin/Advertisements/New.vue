<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      {{files}}
      <v-card class="elevation-5" color="grey lighten-4" flat>
        <v-card-title><h2>New Advertisement</h2></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <form @keydown.enter="save()">
            <v-file-input small-chips multiple label="Upload photos" v-model="files"></v-file-input>
            <vue-dropzone
              :useCustomSlot=true
              :options="dropzoneOptions"
              @vdropzone-complete="afterComplete"
            >
              <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                <div class="subtitle">...or click to select a file from your computer</div>
              </div>
            </vue-dropzone>
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

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      files: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png",
      },
      images: []
    };
  },
  methods: {
    afterComplete(item) {
      this.images.push(item)
    },
    save() {
      let formData = new FormData();
      
      this.images.map((item,key) => formData.append('files['+key+']',item))

      this.$http
        .post("/advertisements", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }})
        .then((res) => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.dropzone-custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 20px;
  color: #00205b;
}

.subtitle {
  color: #bf0d3e;
}
</style>