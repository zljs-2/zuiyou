<template>
    <section>
        <section class="user">
            <span class="uPhoto  flex-align-start">
                <img :src="artContentCell.uPhoto" alt="">
            </span>
            <span class="uName flex-1 flex-align-start">
                {{artContentCell.uName}}
            </span>
        </section>
        <section class="art_content " @click="gotoAddress('/art?id='+artContentCell.artIndex)">
            <section class="art_title flex-1" >
                <p>{{artContentCell.artTitle}}</p>
            </section>
            <ImgCell
                :artImgCell="artContentCell.artImg">
            </ImgCell>
        </section>
        <section class="art_pat">
            <span class="art_patContent">
                {{artContentCell.artPat}}
            </span>
        </section>
    </section>
    
</template>

<script>
import ImgCell from "./ImgCell";
export default {
  components: {
    ImgCell
  },
  props: {
    artContentCell: Object
  },
  data() {
    return {};
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
.user {
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
</style>
