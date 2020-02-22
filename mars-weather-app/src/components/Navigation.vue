<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Navigation Links Styling
*********************/
nav {
  margin: 0 auto;
}

nav ul {
  list-style: none;
}

nav li {
  display: inline-block;
  padding-left: 2em;
  font-size: 1.5em;
}

li {
  float: left;
}

li a {
  text-decoration: none;
  color: white;
}

nav a.router-link-exact-active {
  color: purple;
  position: relative;
}

nav a.router-link-exact-active:after {
  position: absolute;
  content: '';
  height: 3px;
  left: 0;
  bottom: -10px;
  background: purple;
  width: 100%;
}
</style>
