<template>
  <section class="art_comment_wrap" @click="gotoAddress('/art?id='+articleCommentCell.artIndex)">
            <section class="art_comment">
                <section >
                    <span class="art_commentContent">
                        {{articleCommentCell.Comment}}
                    </span>
                    <ImgCell
                        :artImgCell="articleCommentCell.CommentImg">
                    </ImgCell>
                </section>
                <section class="comment_praise_wrap">
                    <span class="comment_praise">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="articleCommentCell.CommentPraiseUpIcon"></use>
                        </svg>
                    </span>
                    <span class="comment_praiseNum">
                        {{articleCommentCell.CommentPraiseNum}}
                    </span>
                    <span class="comment_tread">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="articleCommentCell.CommentPraiseDownIcon"></use>
                        </svg>
                    </span>
                </section>
            </section>
        </section>
</template>

<script>
import ImgCell from './ImgCell'
export default {
  name: "ArtCommentCell",
  components: {
    ImgCell
  },
  props: {
    articleCommentCell: Object
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {
    gotoAddress(path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
    }
  }
};
</script>

<style>
.art_comment_wrap {
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
.art_comment > .comment_praise_wrap::before {
  content: " ";
  position: absolute;
  top: 0;
  left: -0.3125rem;
  display: block;
  width: 1.25rem;
  height: 1.875rem;
  background-color: #ecebeb;
  border-radius: 0.625rem 0 0 0;
  transform: rotateZ(30deg);
}
</style>
