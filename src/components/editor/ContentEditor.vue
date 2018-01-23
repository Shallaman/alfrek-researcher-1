<template>
  <section class="card content-editor">
    <div class="container">
      <header class="content-title">
        <div class="input-group">
          <input v-model="title" type="text" id="title" class="title" @input="$emit('title', title)">
          <label for="title">Title</label>
          <small class="word_count" :class="overCharacterLimit(title, 55)">{{ title.length }} / 55</small>
        </div>
        <div class="input-group">
          <input v-model="byLine" type="text" id="byline">
          <label for="byline">Byline</label>
          <small class="word_count" :class="overCharacterLimit(byLine, 255)">{{ byLine.length }} / 255</small>
        </div>
      </header>
      <section class="editors">
        <h2>{{ editorHeading }}</h2>
        <wysiwyg v-show="isOnProblem" v-model="problemBody" placeholder="Describe the Problem..."></wysiwyg>
        <wysiwyg v-show="!isOnProblem" v-model="solutionBody" placeholder="What is your Solution?"></wysiwyg>
      </section>
      <section class="dropzone-wrap">
        <h3>Attachments</h3>
        <dropzone
          id="thumbnail_upload"
          :dropzone-options="dropzoneOptions"
          url="https://httpbin.org/post"
          v-on:vdropzone-success="showSuccess"
          :useCustomDropzoneOptions="true"
        >
          <input type="hidden" name="token" value="xxx">
        </dropzone>
      </section>
      <div v-if="isOnProblem" class="button-group right">
        <h2>Next add your Solution</h2>
        <v-button @click="isOnProblem = false" type="success">Next</v-button>
      </div>
      <div v-else class="button-group left">
        <v-button @click="isOnProblem = true" type="success">Back</v-button>
        <h2>Go back to the Problem</h2>
      </div>
    </div>
  </section>
</template>

<script>
  import vButton from '../Button.vue'
  import Dropzone from 'vue2-dropzone'
  export default {
    data () {
      return {
        title: '',
        byLine: '',
        problemBody: '',
        solutionBody: '',
        isOnProblem: true,
        dropzoneOptions: {
          acceptedFileTypes: 'image/*,application/pdf',
          resizeWidth: 1980,
          resizeQuality: 0.3,
          maxFiles: 1
        }
      }
    },

    computed: {
      editorContent() {
        if (this.isOnProblem) {
          return "problemBody"
        } else {
          return "solutionBody"
        }
      },
      editorHeading() {
        if (this.isOnProblem) {
          return "The Problem"
        } else {
          return "The Solution"
        }
      }
    },

    methods: {
      overCharacterLimit(element ,limit) {
        if (element.length > limit) {
          return 'error'
        }
      },
      showSuccess() {
        console.log("A file was successfully uploaded")
      }
    },

    components: {
      vButton,
      Dropzone
    }
  }

</script>

