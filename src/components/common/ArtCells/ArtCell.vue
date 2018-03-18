<template>
    <article class="art_item">
        <ArtContent 
            :artContentCell="articleCell"></ArtContent>
        <ArtCommentCell 
            :articleCommentCell="articleCell.artComment"></ArtCommentCell>
        <ArtBar 
            :artBarCell="articleCell.artBar"></ArtBar>
    </article>
</template>

<script >
import ArtContent from './ArtContent'
import ArtBar from './ArtBar'
import ArtCommentCell from "./ArtCommentCell"
import ImgCell from './ImgCell'
export default {
  name: "ArtCell",
  props: {
    articleCell: Object
  },
  components: {
    ArtContent,
    ArtCommentCell,
    ImgCell,
    ArtBar
  },
  computed: {},
  data() {
    return {};
  }
};
</script>

<style>
.art_item {
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
