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
import axios from 'axios'

export default {
  name: 'Content',
  components: {
    'app-list-temps': ListTemps,
    'app-get-your-location': GetYourLocation,
    'app-weather': Weather
  },
  data () {
    return {
      // Each sol object should contain the following fields:
      //  * sol: integer,
      //  * avg: integer
      //  * date: string
      //  * spd: integer
      temps: [],
      earthTemps: [
        {
          earthDate: '2020-01-01',
          locAvg: 8.594,
          windSpd: 25.1

        }
      ],
      locations: [
        {
          latitude: '29.561',
          longitude: '-98.594',
          city: 'San Antonio'
        }
      ]
    }
  },
  created () {
  // GET request for Mars temp data
    axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      .then((response) => {
        // handle success
        // console.log('Received response:')
        // console.log(response)
        const respData = response.data

        // Breaking up the data to be in a data structure a little easier to work with
        const sols = Object.keys(respData)
        const marsTemps = Object.values(respData)
        const marsArray = []
        marsArray.sol = sols[0]
        marsArray.date = marsTemps[0].First_UTC.slice(0, 10)
        marsArray.avg = marsTemps[0].AT.av
        marsArray.spd = marsTemps[0].HWS.av
        console.log(marsArray)
        // console.log('Temps array in success callback:')
        // console.log(this.temps)
      })
      .catch((error) => {
        // handle error
        console.log(error)
        this.errorMessage = 'Error! Unable to load temp data!'
      })
      .finally((response) => {
        // always executed
        console.log('Finished fetching!')
      })
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
