<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <footerButton></footerButton> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
#home {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.head,
.foot {
  height: 3.125rem;
  line-height: 3.125rem;
  
}
</style>
