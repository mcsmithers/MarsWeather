<template>
  <div class="content-container">
    <p>This is a record from the NASA InSight project on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.  Records are 4-5 days behind Earth to process the data and also because of how far away Mars is from Earth.  Units are in Fahrenheit.</p>
    <br>
    <br>
    <h3>List of Mars Temps:</h3>
    <br>
    <table id="temps-table">
      <!-- Table Header Row -->
      <tr>
        <th>Sol</th>
        <th>Date</th>
        <th>AvgTemp</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="temp in temps" :key="temp.sol">
        <td>{{ temp.sol }}</td>
        <td>{{ temp.date }}</td>
        <td>{{ temp.avg }}</td>
      </tr>
    </table>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ListTemps',
  props: {
    temps: Array
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
