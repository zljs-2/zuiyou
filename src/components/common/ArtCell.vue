<template>
    <article class="art_item">
        <section class="user">
            <span class="uPhoto  flex-align-start">
                <img :src="articleCell.uPhoto" alt="">
            </span>
            <span class="uName flex-1 flex-align-start">
                {{articleCell.uName}}
            </span>
        </section>
        <section class="art_content ">
            <section class="art_title flex-1" @click="">
                <p>{{articleCell.artTitle}}</p>
            </section>
            <section class="art_img">
                <section class="img_wrap" v-for="(artImg,key) in articleCell.artImg"
                    :class="{
                        flex_grow: (articleCell.artImg.length % 3) == 0 ? flag : !flag,
                        oneImg: articleCell.artImg.length == 1 ? flag : !flag,
                        twoImgs: articleCell.artImg.length == 2 ? flag : !flag
                    }">
                    <img  :src="artImg" alt="" class="img">
                </section> 
            </section>
        </section>
        <section class="art_pat">
            <span class="art_patContent">
                {{articleCell.artPat}}
            </span>
        </section>
        <section class="art_comment_wrap" @click="">
            <section class="art_comment">
                <section >
                    <span class="art_commentContent">
                        {{articleCell.artComment.Comment}}
                    </span>
                    <section class="art_img">
                        <section class="img_wrap" v-for="(commentImg,key) in articleCell.artComment.CommentImg"
                            :class="{
                                flex_grow: (articleCell.artComment.CommentImg.length % 3) == 0 ? flag : !flag,
                                oneImg: articleCell.artComment.CommentImg.length == 1 ? flag : !flag,
                                twoImgs: articleCell.artComment.CommentImg.length == 2 ? flag : !flag
                            }">
                        <img  :src="commentImg" alt="" class="img">
                    </section>
                </section>
                </section>
                <section class="comment_praise_wrap">
                    <span class="comment_praise">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tubiao103"></use>
                        </svg>
                    </span>
                    <span class="comment_praiseNum">
                        {{articleCell.artComment.CommentPraiseNum}}
                    </span>
                    <span class="comment_tread">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tubiao104"></use>
                        </svg>
                    </span>
                </section>
            </section>
        </section>
        <section class="art_bar" @click="">
            <section class="art_shareNum art_bar_item">
                <svg class="icon art_bar_icon" aria-hidden="true">
                    <use xlink:href="#icon-msnui-share"></use>
                </svg>
                {{articleCell.artBar.shareNum}}
            </section>
            <section class="art_commentNum art_bar_item">
                <svg class="icon art_bar_icon" aria-hidden="true">
                    <use xlink:href="#icon-xiaoxi"></use>
                </svg>
                {{articleCell.artBar.artCommentNum}}
            </section>
            <section class="art_praise_wrap art_bar_item">
                <span class="art_praise art_praiseUp">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use xlink:href="#icon-web-icon-1"></use>
                    </svg>
                </span>
                <span class="art_praiseNum">{{articleCell.artBar.artPraiseNum}}</span>
                <span class="art_praise art_praiseDown">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use xlink:href="#icon-web-icon-"></use>
                    </svg>
                </span>
            </section>
        </section>
    </article>
</template>

<script>
// import timg from "@/assets/timg.jpg";
export default {
  name: "ArtCell",
  props: {
    articleCell: Object
  },

  computed: {},
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
.art_item > .user {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  height: 2.5rem;
  background-color: #fff;
}

.uPhoto {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 0.625rem;
  border: 0.0625rem solid #ccc;
}
.uPhoto > img {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
}
.flex-1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.flex-align-start {
  -webkit-box-align: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
}

.uName {
  width: auto;
  height: 1.875rem;
  line-height: 1.875rem;
  text-align: left;
  font-size: 0.875rem;
}
#art .art_content {
  margin: 0 0.625rem;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
}
#art .art_content > .art_title {
  text-align: left;
  width: auto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0.625rem;
}
.art_img {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 100%;
  min-width: 6.25rem;
  min-height: 6.25rem;
}
.flex_grow {
  flex-grow: 1;
}
.img_wrap {
  order: 1;
  box-sizing: border-box;
  width: 6.25rem;
  height: 6.25rem;
  margin: 0.1875rem;
  overflow: hidden;
}
.art_img .img {
  box-sizing: border-box;
  width: 12.5rem;
  height: 12.5rem;
}
.art_img .oneImg {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
.art_img .twoImgs {
  flex-grow: 1;
  box-sizing: border-box;
  height: 9.375rem;
}
/*.art_content .art_img > moreImgs {
  flex-grow: 1;
  flex-shrink: 1;
  width: 6.25rem;
  height: 6.25rem;
} */
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
.art_bar {
  width: auto;
  height: 1.875rem;
  line-height: 1.875rem;
  font-size: 0.875rem;
  margin: 0.625rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  color: rgb(167, 167, 167);
}
.art_bar_item {
  flex-grow: 1;
  text-align: left;
  box-sizing: border-box;
  padding: 0.3125rem;
}
.art_praise_wrap {
  text-align: right;
}
.art_bar_icon {
  font-size: 1rem;
}
</style>
