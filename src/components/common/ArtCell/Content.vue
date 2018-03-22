<template>
    <section class="content_wrap">
        <section class="content_title">
            <section class="user" v-if="(isCommentList|isContent)">
                <section>
                  <section>
                    <span class="uPhoto  flex-align-start">
                      <img :src="ContentCell.photo" alt="">
                    </span>
                  </section>
                  <section>
                    <span class="uName flex-1 flex-align-start">
                      {{ContentCell.name}}
                    </span>
                    <span v-if="perArt">
                      {{ContentCell.createTime}}
                    </span>
                  </section>
                </section>
                <span class="btn" v-if="artHome">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-msnui-close"></use>
                    </svg>
                </span>
                <span class="btn" v-if="perArt">
                    关注
                </span>
            </section>
            
            <section v-if="isComment" 
                    :class="{
                        comment_praise_wrap:true,
                        comment_backgrount:artHome,
                    }">
                <span class="comment_praise">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="ContentCell.CommentPraiseUpIcon"></use>
                    </svg>
                </span>
                <span class="comment_praiseNum">
                    {{ContentCell.CommentPraiseNum}}
                </span>
                <span class="comment_tread">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="ContentCell.CommentPraiseDownIcon"></use>
                    </svg>
                </span>
            </section>
        </section>
        <section class="art_content " 
                  @click="gotoAddress('/art?id='+ContentCell.artIndex);
                  clickArt(ContentCell.artIndex)">
            <section class="art_title flex-1" >
                <p>{{ContentCell.contentTitle}}</p>
            </section>
            <ImgCell
                :artImgCell="ContentCell.Img">
            </ImgCell>
        </section>
        
        
    </section>
    
</template>

<script>
import ImgCell from "./ImgCell";
import bus from "@/components/bus.js";
export default {
  components: {
    ImgCell
  },
  props: {
    ContentCell: Object,
    artHome: Boolean,
    perArt: Boolean,
    isContent: Boolean,
    isComment: Boolean,
    isCommentList: Boolean
  },
  data() {
    return {};
  },
  methods: {
    clickArt: function(index) {
      bus.$emit("ArtIndex", index);
    },
    gotoAddress(path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
    }
  }
};
</script>

<style scoped>
/* .content_title{
  display: flex;
  align-items: flex-start;
}
.user {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  height: 2.5rem;
  background-color: #fff;
}
.btn{
  align-self: flex-end;
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


.comment_praise_wrap {

  align-self: flex-end;
  padding: 0.3125rem 0.9375rem;
  border-radius: 0.623rem 0.623rem 0 0;

  color: dodgerblue;
}
.comment_backgrount {
  background-color: #ecebeb;
}
.comment_praise_wrap .icon {
  font-size: 0.875rem;
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
} */

/* #art .art_content {
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
} */
</style>
