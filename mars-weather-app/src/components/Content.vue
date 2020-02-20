<template>
  <div class="content-container">
    <app-list-temps v-bind:temps="temps"></app-list-temps>
    <app-get-your-location v-bind:locations="locations"></app-get-your-location>
    <app-weather v-bind:earthTemps="earthTemps"></app-weather>
  </div>
</template>

<script>
import ListTemps from './ListTemps.vue'
import GetYourLocation from './GetYourLocation.vue'
import Weather from './Weather.vue'

export default {
  name: 'Content',
  components: {
    'app-list-temps': ListTemps,
    'app-get-your-location': GetYourLocation,
    'app-weather': Weather
  },
  data () {
    return {
      temps: [
        {
          sol: 1,
          date: '2020-01-01',
          avg: -56,
          spd: 225.4
        },
        {
          sol: 2,
          date: '2019-12-31',
          avg: -55,
          spd: 200.5
        }
      ],
      locations: [
        {
          id: 1,
          latitude: '29.561',
          longitude: '-98.594',
          city: 'San Antonio'
        }
      ],
      earthTemps: [
        {
          earthDate: '2020-01-01',
          locAvg: 15,
          windSpd: 10.2
        }
      ]
    }
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
