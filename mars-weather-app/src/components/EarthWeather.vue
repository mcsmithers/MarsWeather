<template>
  <div class="content-container">
  <h3>Here's your local weather from today compared to Mars:</h3>
  <br>
  <table id="earth-temps-table">
      <!-- Table Header Row -->
      <tr>
        <th>City</th>
        <th>Date</th>
        <th>Temp</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="earthTemp in earthTemps" :key="earthTemp.date">
        <td>{{ earthTemp.city }}</td>
        <td>{{ earthTemp.date }}</td>
        <td>{{ earthTemp.avg }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EarthWeather',
  computed: {
    earthTemps () {
      return this.$store.getters.getEarthData
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
