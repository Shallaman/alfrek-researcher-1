<template>
  <main class="main">
    <div class="container-fluid solution-header"></div>
    <div class="container-fluid solution-editor">
      <div class="row justify-content-center">
        <section class="col-12 col-md-12 col-lg-12 col-xl-6 editor">
            <section class="card content-editor">
                <div class="container">
                    <header class="content-title">
                        <div class="input-group">
                            <input v-model="solution.title" type="text" id="title" class="title">
                            <label for="title">Title</label>
                            <small class="word_count" :class="overCharacterLimit(solution.title, 55)">{{ solution.title.length }} / 55</small>
                        </div>
                        <div class="input-group">
                            <input v-model="solution.byLine" type="text" id="byline">
                            <label for="byline">Byline</label>
                            <small class="word_count" :class="overCharacterLimit(solution.byLine, 255)">{{ solution.byLine.length }} / 255</small>
                        </div>
                    </header>
                    <section class="editors">
                        <h2>{{ editorHeading }}</h2>
                        <wysiwyg v-show="isOnProblem" v-model="solution.problemBody" placeholder="Describe the Problem..."></wysiwyg>
                        <wysiwyg v-show="!isOnProblem" v-model="solution.solutionBody" placeholder="What is your Solution?"></wysiwyg>
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
        </section>
        <section class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 meta">
            <div class="container">
                <div class="row">
                    <div class="card meta">
                    <div class="input-group">
                        <input-tag :tags="solution.keywords" placeholder="Add a keyword and press tab"></input-tag>
                        <label>Keywords</label>
                    </div>
                    <div class="roles_wrap">
                        <multiselect
                        v-model="solution.roles"
                        :options="roleOptions"
                        :multiple="true"
                        label="name"
                        :close-on-select="false"
                        placeholder="Who is this for?"
                        >
                        </multiselect>
                        <label>Roles</label>
                    </div>
                    <div class="buttons">
                        <v-button @click="postSolution" type="success">Submit</v-button>                                          
                    </div>
                </div>
                </div>
            </div>
        </section>
      </div>


    </div>
  </main>
</template>
<script>
import axios from 'axios'
import vButton from '../components/Button.vue'
import inputTag from 'vue-input-tag'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
    export default {

    data () {
        return {
            solution: {
                title: '',
                byLine: '',
                problemBody: '',
                solutionBody: '',
                keywords: [],
                roles: []
            },
            isOnProblem: true,
            roleOptions: []
        }
    },

    components: {
      vButton,
      inputTag,
      Multiselect
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
      getPurposedRoles() {
          axios.get("http://localhost:5000/resource/purposedroles")
          .then(r => {
              this.roleOptions = r.data
          })
      },
      postSolution() {
          this.solution.username = this.$store.state.user.userName;
          axios.post("http://localhost:5000/solutions", this.solution)
          .then(r => {
              console.log(r)
          })
          .catch(e => {
              console.log(e)
          })
      }
    },

    created () {
        this.getPurposedRoles()
    }

  }
</script>
