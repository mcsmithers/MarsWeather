import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  // Message to display on banner
    bannerMessage: '',
    // Types: Error, Info, or Success
    bannerType: 'Info',
    marsTemps: [],
    earthTemps: []
  },
  getters: {
    getBannerMessage: (state) => {
      return state.bannerMessage
    },
    getBannerType: (state) => {
      return state.bannerType
    },
    getEarthData: (state) => {
      return state.earthTemps
    },
    getMarsData: (state) => {
      return state.marsTemps
    }
  },
  mutations: {
    setBannerMessage: (state, payload) => {
      state.bannerMessage = payload
    },
    setBannerType: (state, payload) => {
      state.bannerType = payload
    },
    setMarsData: (state, payload) => {
      state.marsTemps = payload
    },
    setEarthData: (state, payload) => {
      state.earthTemps = payload
    }
  },
  actions: {
    setBanner: (context, payload) => {
      context.commit('setBannerMessage', payload.message)
      context.commit('setBannerType', payload.type)
    },
    retrieveMarsData: (context) => {
      // GET request for Mars temp data
      axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        .then((response) => {
        // handle success
          const respData = response.data
          context.commit = 'Success'
          context.commit = 'SUCCESS! Loaded Mars data!'

          // Breaking up the data to be in a data structure a little easier to work with
          const sols = Object.keys(respData)
          const mars = Object.values(respData)
          const marsTemps = []
          marsTemps.sol = sols[0]
          marsTemps.date = mars[0].First_UTC.slice(0, 10)
          marsTemps.avgC = mars[0].AT.av
          marsTemps.avgF = mars.avgC * 9 / 5 + 32
          console.log(marsTemps)

          // return marsTemps
          var mountedMarsTemps = marsTemps.map(function (temp) {
            return temp
          })

          context.commit('setMarsTemps', mountedMarsTemps)
        })
        .catch((error) => {
          // handle error
          context.commit = 'Error'
          context.commit = 'ERROR! Unable to load Mars data!'
          console.log(error.message)
        })
        .finally((response) => {
          // always executed
          console.log('Finished fetching Mars!', response)
        })
    },
    retrieveEarthData: (context) => {
      axios.get('https://api.openweathermap.org/data/2.5/weather?zip=78240,us&appid=18fcb2ae16f7d9575c588dac714c9282')
        .then((response) => {
          // handle success
          const respData = response.data
          context.commit = 'Success'
          context.commit = 'SUCCESS! Loaded Earth data!'

          // Breaking up the data to be in a data structure a little easier to work with
          const earth = Object.values(respData)
          // console.log(earthTemps)

          // getting the city
          const yourCity = earth[12]

          // formatting date to be consistent
          const strDate = new Date()
          const date = strDate.toISOString().split('T')[0]

          // formatting degrees to be in f not k
          const avgK = earth[3].temp
          const avgC = avgK - 273.15
          const avgF = avgC * (9 / 5) + 32

          // putting all this in an earth array
          const earthTemps = []
          earthTemps.date = date
          earthTemps.avg = avgF.toFixed(2)
          earthTemps.city = yourCity
          console.log(earthTemps)
          // return earthTemps
          // return marsTemps
          var mountedEarthTemps = earthTemps.map(function (temp) {
            return temp
          })

          context.commit('setEarthTemps', mountedEarthTemps)
        })
        .catch((error) => {
          // handle error
          this.messageType = 'Error'
          this.messageToDisplay = 'ERROR! Unable to load Earth data!'
          console.log(error.message)
        })
        .finally((response) => {
        // always executed
          console.log('Finished fetching earth!', response)
        })
    }
  },
  modules: {
  }
})
