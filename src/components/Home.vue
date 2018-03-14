<template>
  <section>
      <headTop></headTop>
      <section>
          <router-view></router-view>
      </section>
      <footerButton></footerButton>
  </section>
</template>

<script>
import headTop from './common/Header'
import footerButton from './common/Footer'

export default {
    data(){
        return {}
    },
    components:{
        headTop,
        footerButton
    }
}
</script>

<style>
html,body{
    width:100%;
    margin: 0;
    padding: 0;
}
</style>
