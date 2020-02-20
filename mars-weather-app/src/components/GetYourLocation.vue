<template>
  <div class="content-container">
  <h1>Want to compare to Your Location?</h1>
  <br>
  <button v-on:click="getLocation">Get Your Location</button><br/>
    <table id="location-table">
      <!-- Table Header Row -->
      <tr>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>City</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="location in locations" :key="location.id">
        <td>{{ location.latitude }}</td>
        <td>{{ location.longitude }}</td>
        <td>{{ location.city }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GetYourLocation',
  props: {
    locations: Array
  },
  methods: {
    getLocation: function () {
      // const latitude = document.querySelector('#latitude')
      // const longitude = document.querySelector('#longitude')

      // function success (position) {
      //   const latitude = position.coords.latitude
      //   const longitude = position.coords.longitude
      //   status.textContent = ''
      //   mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
      //   mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`
      // }

      // function error () {
      //   status.textContent = 'Unable to retrieve your location'
      // }

      // if (!navigator.geolocation) {
      //   status.textContent = 'Geolocation is not supported by your browser'
      // } else {
      //   status.textContent = 'Locating…'
      //   navigator.geolocation.getCurrentPosition(success, error)
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
