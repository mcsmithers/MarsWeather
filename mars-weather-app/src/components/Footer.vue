<template>
  <footer>
    <h4>{{ message }}</h4>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      message: 'Christina Smithers, 2020'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  margin: auto;
}
</style>
