<template>
  <div class="content-container">
  <h2>Want to compare to your local weather today?</h2>
  <br>
  <div class="form">
  <label for="newName">Zip Code:</label>
  <input type="text" v-model="zip.value" maxlength="5" placeholder="78240" v-on:keydown.enter='getZipCode()'/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserZipInput',
  data () {
    return {
      zip: ''
    }
  },
  methods: {
    getZipCode (zip) {
      if (this.zip.value !== '') {
        console.log('zip code input: ', this.zip.value)
        this.$emit('zip', this.zip.value)

        // Clear the variables used for reading in the new user's info
        this.zip = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
