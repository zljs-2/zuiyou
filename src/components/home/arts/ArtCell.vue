<template>
    <article class="art_item">
        <ArtContent 
            :ContentCell="articleCell" 
            :isContent="isContent">
        </ArtContent>
        <ArtPat 
            :articlePatCell="articleCell.artPat">
        </ArtPat>
        <ArtCommentCell 
            class="art_item_comment" 
            :isCommentList="isCommentList" 
            :ContentCell="articleCell.artGodComment" 
            :isComment="isComment">
        </ArtCommentCell>
        
        <ArtBar :artBarCell="articleCell.artBar"></ArtBar>
    </article>
</template>

<script >
import ArtContent from '@/components/common/ArtCell/Content'
// import ArtContent from '@/components/common/ArtCell/ArtContent'
import ArtPat from '@/components/common/ArtCell/ArtPat'
import ArtBar from '@/components/common/ArtCell/ArtBar'
import ArtCommentCell from "@/components/common/ArtCell/Content"
import ImgCell from '@/components/common/ArtCell/ImgCell'
export default {
  // name: "ArtCell",
  props: {
    articleCell: Object
  },
  components: {
    ArtContent,
    ArtPat,
    ArtCommentCell,
    ImgCell,
    ArtBar
  },
  data() {
    return {
      artHome: true,
      isComment:true,
      isCommentList:false,
      isContent:true
    };
  }
};
</script>

<style >
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

.art_item_comment{
  box-sizing: border-box;
  padding: .5rem /* 8/16 */;

}

</style>
