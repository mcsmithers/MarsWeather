<template>
  <div class="content-container">
  <h3>Want to compare to your local weather today?</h3>
  <br>
  <div class="form">
  <label for="zip">Enter a valid US Zip Code:</label>
  <!-- <input type='input' v-model='zip' maxlength="5" minlength="5" placeholder=" e.g. 78240"/> -->
  <input :value="zip">
  <button id='getZipCode' color='primary' v-on:click='save'>Submit</button>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserZipInput',
  data () {
    zipValue: ''
  },
  computed: {
    ...mapState(['zip'])
  },
  methods: {
    ...mapActions(['processZip']),
    save () {
      this.processZip(this.zipValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
