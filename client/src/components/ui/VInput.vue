<template>
  <input
    type="text"
    class="input"
    :value="value"
    @input="$emit('input', $event.target.value)"
    v-custom-charts="isCustomCharts"
  >
</template>

<script>
  import customCharts from '@/directives/customCharts'

  export default {
    name: 'VInput',
    directives: { customCharts },
    props: {
      value: {
        type: String,
        default: ''
      },
      customCharts: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      isCustomCharts() {
        if(this.customCharts && Object.prototype.hasOwnProperty.call(this.customCharts, 'decompress')) {
          return this.customCharts.decompress
        } else return undefined
      }
    }
  }
</script>
