<template>
  <div class="container">
    <div class="card meta">
      <div class="input-group">
        <input-tag :tags="keywords" placeholder="Add a keyword and press tab"></input-tag>
        <label>Keywords</label>
      </div>
      <div class="roles_wrap">
        <multiselect
          v-model="selectedRoles"
          :options="roles"
          :multiple="true"
          :close-on-select="false"
          placeholder="Who is this for?"
        >
        </multiselect>
        <label>Roles</label>
      </div>
      <div class="dropzone_wrap">

      </div>
    </div>
  </div>
</template>
<script>
  import inputTag from 'vue-input-tag'
  import Multiselect from 'vue-multiselect'
  import Dropzone from 'vue2-dropzone'
  import 'vue-multiselect/dist/vue-multiselect.min.css'
  export default {
    data() {
      return {
        keywords: [],
        roles: ['CEO', 'COO', 'CIO', 'CDO', 'VP', 'Student', 'Other', 'Your mom', 'Someone else'],
        selectedRoles: [],

        dropzoneOptions: {
          acceptedFileTypes: 'image/*,application/pdf',
          thumbnailWidth: 50,
          thumbnailHeight: 50,
          resizeWidth: 1980,
          resizeQuality: 0.3,
          maxFiles: 1
        }
      }
    },
    methods: {
      showSuccess() {
        console.log("A file was successfully uploaded")
      }
    },
    components: {
      inputTag,
      Multiselect,
      Dropzone
    }
  }
</script>
