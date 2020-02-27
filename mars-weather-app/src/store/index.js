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
    // Blank initial value though Anchorage AK is here fot tests
    // inputText: '99501',
    zip: '',
    earthTemps: []
  },
  getters: {
    getBannerMessage: (state) => {
      return state.bannerMessage
    },
    getBannerType: (state) => {
      return state.bannerType
    },
    getZipCode: (state) => {
      return state.zip
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
    setZipCode: (state, payload) => {
      state.zip = payload
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
          context.commit('setBannerMessage', 'Success')
          context.commit('setBannerType', 'SUCCESS! Loaded Mars data!')

          // Breaking up the data to be in a data structure a little easier to work with
          const sols = Object.keys(respData)
          const mars = Object.values(respData)

          // Pick out our data and clean it to look how most users would understand in the US
          const marsHolder = []
          marsHolder.sol = sols[0]
          marsHolder.date = mars[0].First_UTC.slice(0, 10)
          marsHolder.avg = parseInt(mars[0].AT.av * (9 / 5) + 32)
          // console.log(marsHolder)

          // Put the cleaned up data in to an object into the array
          const marsObj = Object.assign({}, marsHolder)
          // console.log(marsObj)
          const marsTemps = []
          marsTemps.push(marsObj)
          // console.log(marsTemps)

          // Now with the data in a usable form, we can sent it to the context
          context.commit('setMarsData', marsTemps)
        })
        .catch((error) => {
          // handle error
          context.commit('setBannerMessage', 'ERROR! Unable to load Mars data!')
          context.commit('setBannerType', 'Error')
          console.log(error.message)
        })
        .finally((response) => {
          // always executed
          console.log('Finished fetching Mars!')
        })
    },
    processZip: ({ commit }, zip) => {
      commit('setZipCode', zip)
    },
    retrieveEarthData: (context) => {
      const zip = context.state.zip
      if (zip) {
        axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=18fcb2ae16f7d9575c588dac714c9282')
          .then((response) => {
            // handle success
            const respData = response.data
            context.commit('setBannerMessage', 'SUCCESS! Loaded Earth data!')
            context.commit('setBannerType', 'Success')

            // Breaking up the data to be in a data structure a little easier to work with
            const earth = Object.values(respData)
            // console.log(earthTemps)

            // getting the city
            const yourCity = earth[11]

            // formatting date to be consistent
            const strDate = new Date()
            const date = strDate.toISOString().split('T')[0]

            // formatting degrees to be in f not k for American users
            const avgK = parseInt(earth[3].temp)
            const avgC = parseInt(avgK - 273.15)
            const avg = parseInt(avgC * (9 / 5) + 32)

            // Putting all this in an earth array so that data looks good for the table
            const earthHolder = []
            earthHolder.date = date
            earthHolder.avg = avg.toFixed()
            earthHolder.city = yourCity
            // console.log(earthHolder)

            // Put the cleaned up data in to an object into the array
            const earthObj = Object.assign({}, earthHolder)
            // console.log(earthObj)
            const earthTemps = []
            earthTemps.push(earthObj)
            // console.log(earthTemps)
            context.commit('setEarthData', earthTemps)
          })
          .catch((error) => {
            // handle error
            context.commit('setBannerMessage', 'ERROR! Unable to load Earth data!')
            context.commit('setBannerType', 'Error')
            console.log(error.message)
          })
          .finally((response) => {
            // always executed
            console.log('Finished fetching earth!')
          })
      }
    }
  },
  modules: {
  }
})
