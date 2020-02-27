<template>
  <div class="content-container">
    <h4>Talk to Christina</h4>
    <br>
    <div class="contact-line">
    <p><i class="fa fa-envelope" aria-hidden="true"></i>christina.smithers@gmail.com</p>
    </div>
    <br>
    <div class="contact-line">
    <p><i class="fab fa-github"></i><a href="https://github.com/mcsmithers">https://github.com/mcsmithers</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: auto;
}
.contact-line {
  float: left;
  display: inline-block;
  margin: auto;
}
.fa-envelope, .fa-github {
  margin-right: 20px;
}
</style>
