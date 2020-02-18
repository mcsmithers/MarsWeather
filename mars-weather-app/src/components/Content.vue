<template>
  <div class="content-container">
    <app-list-temps v-bind:temps="temps"></app-list-temps>
  </div>
</template>

<script>
import ListTemps from './ListTemps.vue'

export default {
  name: 'Content',
  components: {
    'app-list-temps': ListTemps
  },
  data () {
    return {
      temps: [
        {
          sol: 1,
          date: '2020-01-01',
          avg: -56,
          spd: 225.4
        },
        {
          sol: 2,
          date: '2019-12-31',
          avg: -55,
          spd: 200.5
        }
      ]
    }
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
