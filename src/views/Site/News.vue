<template>
  <v-card>
    <v-card-title>{{ new_blog.title }}</v-card-title>
    <v-card-subtitle>{{ new_blog.sub_title }}</v-card-subtitle>
    <v-card-text>
      <!-- <div class="ma-5" v-html="new_blog.body"></div> -->
      <h3>Content of the editor.</h3> <h2>Mais um teste</h2><br><strong>Op&ccedil;&otilde;es:</strong> <ul> <li><strong>Teste 1</strong></li> <li>Teste 2</li> <li>Teste 3</li> </ul> <blockquote> <p>Mis um teste</p> </blockquote>
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
