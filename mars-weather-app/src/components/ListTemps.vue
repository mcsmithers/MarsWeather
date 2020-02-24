<template>
  <div class="content-container">
    <p>This is a record from the NASA InSight project on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.  Records are 4-5 days behind Earth.  Units are in Fahrenheit.  You can learn more about the Insight project <a href="https://mars.nasa.gov/insight/">here</a> if you want are curious on how we are learning about our neighbor through its weather and geology.</p>
    <br>
    <br>
    <h3>Most recent Mars Temperature:</h3>
    <br>
    <table id="temps-table">
      <!-- Table Header Row -->
      <tr>
        <th>Sol</th>
        <th>Date</th>
        <th>AvgTemp</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="marsTemp in marsTemps" :key="marsTemp.sol">
        <td>{{ marsTemp.sol }}</td>
        <td>{{ marsTemp.date }}</td>
        <td>{{ marsTemp.avg }}</td>
      </tr>
    </table>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ListTemps',
  computed: {
    marsTemps () {
      return this.$store.getters.getMarsData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 70%;
}

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
