<template>
    <article class="art_item">
        <ArtContent :artContentCell="articleCell"></ArtContent>
        <ArtCommentCell class="art_item_comment" :articleCommentCell="articleCell.artGodComment" :artHome="artHome" :perArt="perArt"></ArtCommentCell>
        <ArtBar :artBarCell="articleCell.artBar"></ArtBar>
    </article>
</template>

<script >
import ArtContent from '@/components/common/ArtCell/ArtContent'
import ArtBar from '@/components/common/ArtCell/ArtBar'
import ArtCommentCell from "@/components/common/ArtCell/ArtCommentCell"
import ImgCell from '@/components/common/ArtCell/ImgCell'
export default {
  // name: "ArtCell",
  props: {
    articleCell: Object
  },
  components: {
    ArtContent,
    ArtCommentCell,
    ImgCell,
    ArtBar
  },
  data() {
    return {
      artHome: true,
      perArt: false,
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


/* .art_comment_wrap {
  text-align: left;
  width: auto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: #ecebeb;
  border-radius: 0.625rem;
  margin: 0.9375rem 0.625rem 0 0.625rem;
  padding: 0.625rem;
}
.art_comment_wrap > .art_comment {
  position: relative;
  top: 0;
  left: 0;
}
.art_comment .art_img {
  padding: 0.3125rem;
}
.art_comment > .comment_praise_wrap {
  position: absolute;
  top: -2.1875rem;
  right: -0.625rem;
  background-color: #ecebeb;
  padding: 0.3125rem 0.9375rem;
  border-radius: 0.623rem 0.623rem 0 0;

  color: dodgerblue;
}
.art_comment > .comment_praise_wrap .icon {
  font-size: 0.875rem;
} */

</style>
