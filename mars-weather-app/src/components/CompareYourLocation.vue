<template>
  <div class="content-container">
  <h1>Compare Your Location:</h1>
  <br>
    <div>
      <span v-if="$geolocation.loading">Loading location...</span>
      <span v-else-if="!$geolocation.supported">Geolocation API is not supported</span>
      <span v-else>Range from destination: {{ inRange ? 'Allowed' : 'Disallowed' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompareYourLocation',
  computed: {
    inRange() {
      const coords = this.$geolocation.coords
      if (!coords) return '?'
      return distanceFrom(coords, this.destination) > 150
    }
  }
}
</script>
