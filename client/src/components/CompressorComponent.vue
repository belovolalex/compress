<template>
  <div class="compressor">
    <div class="compressor-row">
      <div class="compressor-label">input string</div>
      <VInput
        v-model="charts"
        :custom-charts="{ decompress }"
      />
    </div>
    <div class="compressor-row">
      <div class="compressor-label">{{ resultLabel }}</div>
      <VInput
        v-model="result"
        disabled
      />
    </div>
    <div class="compressor-row compressor-row--buttons">
      <VButton @click="onAction">
        {{ compressButtonText }}
      </VButton>
      <VButton
        @click="onClear"
        clear
      >
        clear
      </VButton>
    </div>
  </div>
</template>

<script>
  import customCharts from '@/directives/customCharts'
  import { compress, decompress } from '@/services'
  import { showErrorNotifications } from '@/mixins/errors'
  import VButton from './ui/VButton'
  import VInput from './ui/VInput'

  export default {
    name: 'CompressorComponent',
    directives: { customCharts },
    mixins: [showErrorNotifications],
    components: {
      VButton,
      VInput
    },
    props: {
      decompress: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        charts: '',
        result: ''
      }
    },
    computed: {
      resultLabel () {
        return this.decompress ? 'decompressed string': 'compressed string'
      },
      compressButtonText () {
        return this.decompress ? 'decompress': 'compress'
      }
    },
    methods: {
      onClear() {
        this.charts = ''
        this.result = ''
      },
      onAction() {
        let action = this.decompress ? decompress : compress

        action({ string: this.charts })
          .then(response => { this.result = response.data.string })
          .catch(error => { this.showErrorNotifications(error.response.data.errors) })
      }
    }
  }
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.compressor {
  max-width: 500px;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.compressor-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &--buttons {
    margin-left: $label-width;
    margin-top: 27px;
  }
}
.compressor-label {
  width: $label-width;
  text-align: right;
  padding-right: 10px;
  font-size: 14px;
}
</style>