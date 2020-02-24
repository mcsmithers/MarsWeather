<template>
  <div class="content-container">
  <h3>Want to compare to your local weather today?</h3>
  <br>
  <div class="form">
  <label for="zip">Enter a valid US Zip Code:</label>
  <input type='input' v-model='inputText' maxlength="5" placeholder="78240"/>
  <button id='getZipCode' color='primary' v-on:click='save'>Submit</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UserZipInput',
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    save () {
      this.$emit('save', this.inputText)
      this.inputText = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
