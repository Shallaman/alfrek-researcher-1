<template>
  <main class="main">
    <div class="container-fluid solution-header"></div>
    <div class="container-fluid solution-editor">
      <div class="row justify-content-center">
        <section class="col-12 col-md-12 col-lg-12 col-xl-6 editor">
          <content-editor></content-editor>
        </section>
        <section class="col-12 col-sm-6 col-md-5 col-lg-5 col-xl-3 authors">
          <author-editor></author-editor>
        </section>
        <section class="col-12 col-sm-6 col-md-5 col-lg-5 col-xl-3 meta">
          <meta-editor></meta-editor>
        </section>
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
