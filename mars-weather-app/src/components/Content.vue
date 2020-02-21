<template>
  <div class="content-container">
    <app-banner v-bind:bannerMessage="messageToDisplay" v-bind:bannerType="messageType" v-on:clear-banner="clearMessage"></app-banner>
    <app-list-temps v-bind:temps="temps"></app-list-temps>
    <app-user-zip-input></app-user-zip-input>
    <app-earth-weather v-bind:earthTemps="earthTemps"></app-earth-weather>
  </div>
</template>

<script>
import ListTemps from './ListTemps.vue'
import UserZipInput from './UserZipInput.vue'
import EarthWeather from './EarthWeather.vue'
import Banner from './Banner.vue'
import axios from 'axios'

export default {
  name: 'Content',
  components: {
    'app-list-temps': ListTemps,
    'app-user-zip-input': UserZipInput,
    'app-earth-weather': EarthWeather,
    'app-banner': Banner
  },
  data () {
    return {
      temps: [],
      earthTemps: [],
      locations: [],
      messageToDisplay: '',
      messageType: 'Info'
    }
  },
  methods: {
    clearMessage () {
      this.messageToDisplay = ''
      this.messageType = 'Info'
    }
  },
  created () {
  // GET request for Mars temp data
    const getMarsData = axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
      .then((response) => {
        // handle success
        // console.log('Received Mars response:')
        // console.log(response)
        const respData = response.data
        this.messageType = 'Success'
        this.messageToDisplay = 'SUCCESS! Loaded Mars data!'

        // Breaking up the data to be in a data structure a little easier to work with
        const sols = Object.keys(respData)
        const marsTemps = Object.values(respData)
        const mars = []
        mars.sol = sols[0]
        mars.date = marsTemps[0].First_UTC.slice(0, 10)
        mars.avgC = marsTemps[0].AT.av
        mars.avgF = marsTemps.avgC * 9 / 5 + 32
        console.log(mars)
        return mars
        // console.log('Temps array in success callback:')
        // console.log(this.temps)
      })
      .catch((error) => {
        // handle error
        this.messageType = 'Error'
        this.messageToDisplay = 'ERROR! Unable to load Mars data!'
        console.log(error.message)
      })
      .finally((response) => {
        // always executed
        console.log('Finished fetching Mars!')
      })
    // GET request for Mars temp data
    // const earthData = axios.get('api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}')
    const getEarthData = axios.get('https://api.openweathermap.org/data/2.5/weather?zip=78240,us&appid=18fcb2ae16f7d9575c588dac714c9282')
      .then((response) => {
        // handle success
        // console.log('Received earth response:')
        // console.log(response)
        const respData = response.data
        this.messageType = 'Success'
        this.messageToDisplay = 'SUCCESS! Loaded Earth data!'

        // Breaking up the data to be in a data structure a little easier to work with
        const earthTemps = Object.values(respData)
        // console.log(earthTemps)

        // getting the city
        const yourCity = earthTemps[12]

        // formatting date to be consistent
        const strDate = new Date()
        const date = strDate.toISOString().split('T')[0]

        // formatting degrees to be in f not k
        const avgK = earthTemps[3].temp
        const avgC = avgK - 273.15
        const avgF = avgC * (9 / 5) + 32

        // putting all this in an earth array
        const earthArray = []
        earthArray.date = date
        earthArray.avg = avgF.toFixed(2)
        earthArray.city = yourCity
        console.log(earthArray)
        return earthArray
        // console.log('Temps array in success callback:')
        // console.log(this.temps)
      })
      .catch((error) => {
        // handle error
        this.messageType = 'Error'
        this.messageToDisplay = 'ERROR! Unable to load Earth data!'
        console.log(error.message)
      })
      .finally((response) => {
        // always executed
        console.log('Finished fetching earth!')
      })
    console.log('Mars promise: ')
    console.log(getMarsData)
    console.log('Earth promise: ')
    console.log(getEarthData)
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
