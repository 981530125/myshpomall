<template>
  <div class="hello">
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'Goodsdetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:''
    }
  },
  mounted(){
  	this.$route.meta.title = '详情';
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
</style>
