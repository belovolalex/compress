<template>
  <button
    @click="$emit('click')"
    class="button"
    :class="getClasses"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      clear: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getClasses () {
        return {
          'button--clear': this.clear
        }
      }
    }
  }
</script>

