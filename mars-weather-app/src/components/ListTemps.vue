<template>
  <div class="content-container">
    <h1>List of Temps:</h1>
    <br>
    <table id="temps-table">
      <!-- Table Header Row -->
      <tr>
        <th>Sol</th>
        <th>Date</th>
        <th>AvgTemp</th>
        <th>Speed</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="temp in temps" :key="temp.sol">
        <td>{{ temp.sol }}</td>
        <td>{{ temp.date }}</td>
        <td>{{ temp.avg }}</td>
        <td>{{ temp.spd }}</td>
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
