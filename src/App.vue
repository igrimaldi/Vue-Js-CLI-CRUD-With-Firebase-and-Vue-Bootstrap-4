<template>
  <div id="app">
    <v-toolbar>
       <v-toolbar-title>SIAM</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
       <v-toolbar-items class="hidden-sm-and-down">
         <v-btn flat>Link One</v-btn>
         <v-btn flat>Link Two</v-btn>
         <v-btn flat>Link Three</v-btn>
       </v-toolbar-items>
     </v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
