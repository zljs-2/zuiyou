<template>
  <section id="art_warp">
      <section id="art">
          <article v-for="(item,index) in articles" :index="index" class="art_item">
            <section class="user">
                    <span class="uPhoto  flex-align-start">
                        <img :src="item.uPhoto" alt="">
                    </span>
                    <span class="uName flex-1 flex-align-start">
                        {{item.uName}}
                    </span>
            </section>
            <section class="art_content ">
                <section class="art_title flex-1" @click="">
                    <p>{{item.artTitle}}</p>
                </section>
                <section class="art_img">
                    <img :src="item.artImg" alt="">
                </section>
            </section>
            <section class="art_pat">
                <span class="art_patContent">
                    {{item.artPat}}
                </span>
            </section>
            <section class="art_comment_wrap" @click="">
                <section class="art_comment">
                    <span class="art_commentContent">
                        {{item.artComment.Comment}}
                    </span>
                    <section class="comment_praise_wrap">
                        <span class="comment_praise">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tubiao103"></use>
                            </svg>
                        </span>
                        <span class="comment_praiseNum">
                            {{item.artComment.CommentPraiseNum}}
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
                    {{item.artBar.shareNum}}
                </section>
                <section class="art_commentNum art_bar_item">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaoxi"></use>
                    </svg>
                    {{item.artBar.artCommentNum}}
                </section>
                <section class="art_praise_wrap art_bar_item">
                    <span class="art_praise art_praiseUp">
                        <svg class="icon art_bar_icon" aria-hidden="true">
                            <use xlink:href="#icon-web-icon-1"></use>
                        </svg>
                    </span>
                    <span class="art_praiseNum">{{item.artBar.artPraiseNum}}</span>
                    <span class="art_praise art_praiseDown">
                        <svg class="icon art_bar_icon" aria-hidden="true">
                            <use xlink:href="#icon-web-icon-"></use>
                        </svg>
                    </span>
                </section>
            </section>
          </article>
      </section>
  </section>
</template>

<script>
import timg from "@/assets/timg.jpg";
export default {
  methods: {
    gotoAddress(path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
    }
  },
  data() {
    return {
      articles: [
        {
          uName: "骑猫的外星人",
          uPhoto: timg,
          artTitle:
            "1112dsadasdsdfhsuhdfhsdfhsdhfsdfsdfishdifhsdfhs色粉色染色塞瑞斯而色弱色弱isdfihsdfhisdfhisdfhsdf",
          artImg: timg,
          artPat: "神评集中营",
          artComment: {
            Comment:
              "劈里啪啦劈里啪啦来了asd客服和卢瑟福苏俄回复是岁额说了行如风算了还是嗯二手房色弱粉色软u猴赛雷和self客户是绿色流放黑色回来",
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
* {
  margin: 0;
  padding: 0;
}
#art_warp {
  width: 100%;
}
#art {
  width: 100%;
  box-sizing: border-box;
}
#art .art_item {
  /* background-color: ghostwhite; */
  width: 100%;
  margin: 0 auto;
  border-bottom: 0.5rem solid #ecebeb;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
}
#art .art_item > .user {
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
#art .art_content .art_img > img {
  box-sizing: border-box;
  width: 100%;
  height: 12.5rem;
}

#art .art_pat {
  text-align: left;
  width: auto;
  height: 0.875rem;
  line-height: 0.875rem;
  margin: .3125rem /* 5/16 */ 0 0 0;
}
.art_patContent {
  border-radius: 0.875rem;
  color: #fff;
  font-size: 0.625rem;
  background-color: dodgerblue;
  box-sizing: border-box;
  margin: 0.625rem;
  padding: .1875rem /* 3/16 */ .625rem /* 10/16 */;
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
  top: -2.1875rem /* 35/16 */;
  right: -0.625rem;
  background-color: #ecebeb;
  padding: 0.3125rem 0.9375rem;
  border-radius: 0.623rem 0.623rem 0 0;
  color: dodgerblue;
}
.art_comment > .comment_praise_wrap::before{
    content: ' ';
    position: absolute;
    top: 0;
    left: -.3125rem /* 5/16 */;
    display: block;
    width: 1.25rem ;
    height: 1.875rem /* 30/16 */;
    background-color: #ecebeb;
    border-radius: .625rem /* 10/16 */ 0 0 0;
    transform: rotateZ(30deg)
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
  padding: .3125rem /* 5/16 */;
}
.art_praise_wrap {
  text-align: right;
}
.art_bar_icon{

  font-size: 1rem /* 16/16 */;
}

</style>
