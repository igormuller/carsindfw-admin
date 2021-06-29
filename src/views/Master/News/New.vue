<template>
  <div>
    <h1>New new</h1>
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
    />
    <div class="mt-5">{{ content }}</div>
  </div>
</template>

<script>
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History, Image } from 'tiptap-vuetify'

export default {
  components: {
    TiptapVuetify
  },
  data: () => ({
    content: "<p>I’m running tiptap with Vue.js.</p>",
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      Image,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
  }),
  // mounted() {
  //   this.editor = new Editor({
  //     content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
  //     extensions: [
  //       StarterKit.configure({
  //         heading: {
  //           levels: [1, 2, 3],
  //         }}),
  //       Document,
  //       Paragraph,
  //       Text
  //     ],
  //   })
  // }
};
</script>
