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
        <section class="art_content " @click="gotoAddress('/art')">
            <section class="art_title flex-1" >
                <p>{{articleCell.artTitle}}</p>
            </section>
            <ImgCell
                :artImgCell="articleCell.artImg">
            </ImgCell>
        </section>
        <section class="art_pat">
            <span class="art_patContent">
                {{articleCell.artPat}}
            </span>
        </section>
        <ArtCommentCell
            :articleCommentCell="articleCell.artComment">
        </ArtCommentCell>
        <section class="art_bar" @click="">
            <section class="art_shareNum art_bar_item">
                <svg class="icon art_bar_icon" aria-hidden="true">
                    <use :xlink:href="articleCell.artBar.shareIcon"></use>
                </svg>
                {{articleCell.artBar.shareNum}}
            </section>
            <section class="art_commentNum art_bar_item" @click="gotoAddress('/home/art')">
                <svg class="icon art_bar_icon" aria-hidden="true">
                    <use :xlink:href="articleCell.artBar.commentIcon"></use>
                </svg>
                {{articleCell.artBar.artCommentNum}}
            </section>
            <section class="art_praise_wrap art_bar_item">
                <span class="art_praise art_praiseUp">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use :xlink:href="articleCell.artBar.artPraiseUpIcon"></use>
                    </svg>
                </span>
                <span class="art_praiseNum">
                    {{articleCell.artBar.artPraiseNum}}
                </span>
                <span class="art_praise art_praiseDown">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use :xlink:href="articleCell.artBar.artPraiseDownIcon"></use>
                    </svg>
                </span>
            </section>
        </section>
    </article>
</template>

<script scoped>
// import timg from "@/assets/timg.jpg";
import ArtCommentCell from "./ArtCommentCell"
import ImgCell from './ImgCell'
export default {
  name: "ArtCell",
  props: {
    articleCell: Object
  },
  components: {
    ArtCommentCell,
    ImgCell
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
