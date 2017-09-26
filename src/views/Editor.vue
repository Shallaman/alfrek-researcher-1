<template>
  <main class="content">
    <div class="row">
      <div class="column md3">
        <thumbnail-editor></thumbnail-editor>
       <author-editor></author-editor>
      </div>
      <div class="column md6">

        <content-editor></content-editor>
      </div>
      <div class="column md3">

        <meta-editor></meta-editor>
      </div>
    </div>



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
