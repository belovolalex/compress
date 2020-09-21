<template>
  <div id="app">
    <CompressorComponent />
    <CompressorComponent decompress />
    <notifications group="errors" />
  </div>
</template>

<script>
import CompressorComponent from './components/CompressorComponent'

export default {
  name: 'App',
  components: { CompressorComponent }
}
</script>

<style>
#app {
  font-family: sans-serif;
}
*, *:before, *:after {
  box-sizing: border-box;
}
</style>
