<template>
  <div class="content-container">
  <h3>Want to compare to your local weather today?</h3>
  <br>
  <div class="form">
  <label for="zip">Enter a valid US Zip Code:</label>
  <input :value="zip" @input="setZipCode($event.target.value)" :maxlength="5" :minlength="5">
  <button color='primary' v-on:click='save'>Submit</button>
  </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'UserZipInput',
  computed: {
    ...mapState(['zip'])
  },
  methods: {
    ...mapMutations(['setZipCode']),
    save () {
      this.$store.dispatch('retrieveEarthData')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
