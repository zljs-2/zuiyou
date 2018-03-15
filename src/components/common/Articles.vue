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
              <img src="{item.artTitle}" alt="">
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
export default {
    data(){
        return {
            articles: [
                {
                    uName:'骑猫的外星人',
                    uPhoto:'',
                    artTitle:'111',
                    artImg:'',
                    artPat:'神评集中营',
                    artComment:{
                        Comment:'劈里啪啦劈里啪啦来了',
                        CommentPraiseNum:2222
                    },
                    artBar:{
                        shareNum: 123,
                        artCommentNum: 43,
                        artPraiseNum: 14523
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                },
                {
                    uName:'林枫',
                    uPhoto:'',
                    artTitle:'222',
                    artImg:'',
                    artPat:'套路',
                    artComment:{
                        Comment:'啊怕怕怕怕怕怕怕',
                        CommentPraiseNum:3333
                    },
                    artBar:{
                        shareNum: 34,
                        artCommentNum: 557,
                        artPraiseNum: 2355
                    }
                }
            ]
        }
    }
}
</script>

<style>

.art_item{
    background-color: ghostwhite;
    margin: 0 ;
    padding-bottom: 5px;

}
.user{
    display: flex;
    flex-direction: row;
    background-color: #fff;
}
.uPhoto{
    display: inline-block;
    width: 2.5rem /* 40/16 */;
    height: 2.5rem /* 40/16 */;
    border-radius: 100%;
    border: .0625rem solid #ccc;
    margin: .1875rem /* 3/16 */;
}
.uName{
    display: inline-block;
    width: auto;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: 1.25rem /* 20/16 */;
}
</style>
