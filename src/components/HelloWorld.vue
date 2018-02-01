<template>
  <div class="hello text-center">
    <h1>Vue  Js  CLI  CRUD  With  Firebase  Database<br/>  and  Vue-Bootstrap 4</h1>
    <span>
      <em>By </em><strong>Siam Maruf</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello h1{
  margin-top: 10%;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: bold;
  color: #656565;
  letter-spacing: 2px;
}

.hello span{

}
</style>
