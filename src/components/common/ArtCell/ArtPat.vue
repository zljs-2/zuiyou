<template>
    <section class="art_pat">
        <span class="art_patContent">
            {{articlePatCell}}
        </span>
    </section>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        articlePatCell: String
    }
}
</script>

<style>
.art_pat {
  text-align: left;
  width: auto;
  height: 0.875rem;
  line-height: 0.875rem;
  margin: 0.3125rem 0 0 0;
}
.art_patContent {
  border-radius: 0.875rem;
  color: #fff;
  font-size: 0.625rem;
  background-color: dodgerblue;
  box-sizing: border-box;
  margin: 0.625rem;
  padding: 0.1875rem 0.625rem;
}
</style>
