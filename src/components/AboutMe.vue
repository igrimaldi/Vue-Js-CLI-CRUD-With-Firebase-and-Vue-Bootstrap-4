<template lang="html">
  <div class="about-me">
    <div class="container">
      <h1 class="page-title">{{title}}</h1>
      <hr/>
      <div class="posts-wrap">
        <div v-for="post in posts" class="post">
          <h4>{{post.title}}</h4>
          <p>{{post.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'AboutMe',
  data(){
    return{
      title:'About Me',
      posts:[]
    }
  },
  created:function(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
      this.posts = response.data;
    });
  }
}
</script>

<style lang="css">
</style>
