<template>
<div class="wrap">
  <app-header></app-header>
  <section class="content">
    <thumbnail-editor></thumbnail-editor>
    <author-editor></author-editor>
    <content-editor></content-editor>
    <meta-editor></meta-editor>
  </section>
</div>
</template>
<script>
  import AppHeader from '../components/shared/Header.vue'
  import ThumbnailEditor from '../components/editor/ThumbnailEditor.vue'
  import AuthorEditor from '../components/editor/AuthorEditor.vue'
  import ContentEditor from '../components/editor/ContentEditor.vue'
  import MetaEditor from '../components/editor/MetaEditor.vue'

  export default {

    components: {
      AppHeader,
      ThumbnailEditor,
      AuthorEditor,
      ContentEditor,
      MetaEditor
    }

  }
</script>
