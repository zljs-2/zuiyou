<template>
  <section id="art_warp">
      <section id="art">
          <article v-for="(item,index) in articles" index="index" class="art_item">
            <section class="user">
                    <span class="uPhoto"><img src="{item.uPhoto}" alt=""></span>
                    <span class="uName">{{item.uName}}</span>
            </section>
            <section class="art_title">
                <p>{{item.artTitle}}</p>
            </section>
            <section class="art_img">
                <img :src="item.artImg" alt="">
            </section>
            <section class="art_pat">{{item.artPat}}</section>
            <section class="art_comment_wrap">
                <section class="art_comment">
                    {{item.artComment.Comment}}
                </section>
                <section class="comment_praise_wrap">
                    <span class="comment_praise">1</span>
                    <span class="comment_praiseNum">{{item.artComment.CommentPraiseNum}}</span>
                    <span class="comment_tread">2</span>
                </section>
            </section>
            <section class="art_bar">
                <section class="art_shareNum">{{item.artBar.shareNum}}</section>
                <section class="art_commentNum">{{item.artBar.artCommentNum}}</section>
                <section class="art_praise_wrap">
                    <span class="art_praise">1</span>
                    <span class="art_praiseNum">{{item.artBar.artPraiseNum}}</span>
                    <span class="art_tread">2</span>
                </section>
            </section>
          </article>
      </section>
  </section>
</template>

<script>
import timg from "@/assets/timg.jpg";
export default {
  data() {
    return {
      articles: [
        {
          uName: "骑猫的外星人",
          uPhoto: "",
          artTitle:
            "1112dsadasdsdfhsuhdfhsdfhsdhfsdfsdfishdifhsdfhs色粉色染色塞瑞斯而色弱色弱isdfihsdfhisdfhisdfhsdf",
          artImg: timg,
          artPat: "神评集中营",
          artComment: {
            Comment: "劈里啪啦劈里啪啦来了",
            CommentPraiseNum: 2222
          },
          artBar: {
            shareNum: 123,
            artCommentNum: 43,
            artPraiseNum: 14523
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: timg,
          artTitle: "222",
          artImg: "",
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        },
        {
          uName: "林枫",
          uPhoto: "",
          artTitle: "222",
          artImg: timg,
          artPat: "套路",
          artComment: {
            Comment: "啊怕怕怕怕怕怕怕",
            CommentPraiseNum: 3333
          },
          artBar: {
            shareNum: 34,
            artCommentNum: 557,
            artPraiseNum: 2355
          }
        }
      ]
    };
  }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#art_warp{
    width: 100%;

}
#art {
  width: 100%;
  box-sizing: border-box;
}
.art_item {
  background-color: ghostwhite;
  width: 100%;
}
.user {
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.uPhoto {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  border: 0.0625rem solid #ccc;
  margin: 0.1875rem;
}
.uName {
  display: inline-block;
  width: auto;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-size: 1.25rem;
}
.art_title {
    box-sizing: border-box;
    width: 100%;
  text-align: left;
  /* padding: 0.625rem; */
  font-size: 1.125rem;
  line-height: 1.5rem;
}
.art_img > img {
  box-sizing: border-box;
  padding: 0.1875rem;
  width: 100%;
  height: 12.5rem;
}
</style>
