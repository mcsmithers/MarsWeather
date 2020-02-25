<template>
  <div class="content-container">
    <app-banner></app-banner>
    <app-list-temps></app-list-temps>
    <app-user-zip-input></app-user-zip-input>
    <app-earth-weather></app-earth-weather>
  </div>
</template>

<script>
import ListTemps from './ListTemps.vue'
import UserZipInput from './UserZipInput.vue'
import EarthWeather from './EarthWeather.vue'
import Banner from './Banner.vue'

export default {
  name: 'Content',
  components: {
    'app-list-temps': ListTemps,
    'app-user-zip-input': UserZipInput,
    'app-earth-weather': EarthWeather,
    'app-banner': Banner
  },
  created () {
    this.$store.dispatch('retrieveMarsData')
    this.$store.dispatch('retrieveEarthData')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: auto;
  padding: 4em;
}
</style>
