<template>
  <section class="art_main">
    <section class="perArticle">
        <ArtContent :artContentCell="articles" ></ArtContent>
        <ArtBar :artBarCell="articles.artBar"></ArtBar>
    </section>
      
    <ArtCommentList :comments="articles.artComments"></ArtCommentList>
      
  </section>
</template>

<script>
import bus from '@/components/bus.js'
import axios from "@/axios/api.js";
import ArtContent from "@/components/common/ArtCells/ArtContent";
import ArtCommentList from './artComment/artComment'
import ArtBar from "@/components/common/ArtCells/ArtBar";
export default {
  components: {
    ArtContent,
    ArtCommentList,
    ArtBar
  },
  data() {
    return {
      articles: {
        artBar: {},
        artComments:[]
      },
      artIndex:1
    };
  },
  created() {
    this.setIndex();
    this.getArt();
  },
  methods: {
    setIndex:function(){
      bus.$on('ArtIndex',(data) => {
        console.log("data:",data)
        this.artIndex = data;
      })
    },
    getArt: function() {
      axios.zuiyou_art("/art?id="+this.artIndex).then(res => {
        console.log("res:", res);
        this.articles = res;
      });
      
    }
  }
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
.art_main {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  text-align: left;
}
.art_main .perArticle {
  padding: 0 0.3125rem;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 0.5rem solid #ecebeb;
}
</style>
