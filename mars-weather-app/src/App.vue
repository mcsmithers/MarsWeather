<template>
  <div>
    <div class="grid-container">
      <app-header class="header-title" v-bind:title="title"></app-header>
      <app-navigation class="navigation-links"></app-navigation>
      <app-content class="data-content"></app-content>
      <app-footer class="footer" v-bind:message="footerMessage"></app-footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-navigation': Navigation,
    'app-content': Content,
    'app-footer': Footer
  },
  data () {
    return {
      title: 'Mars Weather',
      footerMessage: 'Christina Smithers, 2020'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-image: url('../src/assets/wallpaper.jpg');
  background-color: rgba(23, 50, 91, 1.0);
  color: white;
  font-family: Verdana, sans-serif;
}

.header-title {
  grid-area: header;
}
.navigation-links {
  grid-area: links;
}
.data-content {
  grid-area: data;
}
.footer {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-columns: 35% auto 10%;
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 10px;
  grid-template-areas:
    "header  header  header"
    "links   links   links"
    "data    data    data"
    "footer  footer  footer";
}

@media screen and (min-width: 900px) {
  .grid-container {
    grid-template-areas:
      "header  links   links"
      "data    data    data"
      "footer  footer  footer";
  }
}
</style>
