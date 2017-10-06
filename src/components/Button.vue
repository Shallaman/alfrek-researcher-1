<template>
  <button @click="click" :class="classes" :type="nativeType ":disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      click(e) {
        this.$emit('click', e)
      }
    },

    computed: {
      classes() {
        return [
          `button ${this.type}`,
          {
            'is-plain': this.plain,
            'is-disabled': this.disabled
          }
        ];
      }
    }
  }
</script>
