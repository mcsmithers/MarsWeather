<template>
  <div v-show="bannerMessage" v-bind:style="{ 'background-color': bannerBackgroundColor }">
    <span id="errorMessageClear" v-on:click="clearBannerMessage">Clear</span>
    <p>{{ bannerMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    bannerMessage: String,
    // Banner Types: Info, Error, or Success
    bannerType: String
  },
  computed: {
    bannerBackgroundColor () {
      if (this.bannerType === 'Error') {
        return 'red'
      } else if (this.bannerType === 'Success') {
        return 'green'
      } else {
        return 'blue'
      }
    }
  },
  methods: {
    clearBannerMessage () {
      this.$emit('clear-banner')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  display:inline-block;
  margin-bottom: 15px;
}

span, p {
  padding: 15px;
  color: white;
  width: auto;
}

div {
  float: left;
}

#errorMessageClear {
  float: right;
}

#errorMessageClear:hover {
  color: black;
  cursor: pointer;
}
</style>
