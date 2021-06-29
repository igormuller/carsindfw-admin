<template>
  <v-card>
    <v-card-title>{{ new_blog.title }}</v-card-title>
    <v-card-subtitle>{{ new_blog.sub_title }}</v-card-subtitle>
    <v-card-text>
      <div class="ma-5" v-html="new_blog.body"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["slug"],
  data: () => ({
    new_blog: {
      title: null,
      sub_title: null,
      body: "teste"
    },
    images: []
  }),
  async created() {
    await this.$http
      .get(`/new_blog/${this.slug}`)
      .then(res => {
        console.log(res.data);
        this.new_blog = res.data;
      })
      .catch(error => console.log(error.response));
  }
};
</script>
