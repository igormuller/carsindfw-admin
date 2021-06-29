<template>
  <div>
    <h3>views</h3>
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
    <div class="mt-6">{{editorData}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        //fsfdds
      }
    };
  }
};
</script>
