<template>
  <main class="content">
    <thumbnail-editor></thumbnail-editor>
    <author-editor></author-editor>
    <content-editor></content-editor>
    <meta-editor></meta-editor>
  </main>
</template>
<script>
  import ThumbnailEditor from '../components/editor/ThumbnailEditor.vue'
  import AuthorEditor from '../components/editor/AuthorEditor.vue'
  import ContentEditor from '../components/editor/ContentEditor.vue'
  import MetaEditor from '../components/editor/MetaEditor.vue'

  export default {

    components: {
      ThumbnailEditor,
      AuthorEditor,
      ContentEditor,
      MetaEditor
    }

  }
</script>
