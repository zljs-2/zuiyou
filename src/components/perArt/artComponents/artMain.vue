<template>
  <section class="art_main">
    <section>
      <ArtContent :artContentCell="articleCell" ></ArtContent>
      <ArtBar :artBarCell="articleCell.artBar"></ArtBar>
    </section>
      
  </section>
</template>

<script>
import ArtContent from "@/components/common/ArtCells/ArtContent";
import ArtBar from "@/components/common/ArtCells/ArtBar";
export default {
  components: {
    ArtContent,
    ArtBar
  },
  props:{
    articleCell: Object
  }, 
    computed: {},
  data() {
    return {}
  }
};
</script>

<style>
.art_main {
  width: 100%;
  margin: 0 auto;
  border-bottom: 0.5rem solid #ecebeb;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
}
</style>
