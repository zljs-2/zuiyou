<template>
  <section class="art_main">
      <ArtContent :artContentCell="articles" ></ArtContent>
      <ArtBar :artBarCell="articles.artBar"></ArtBar>
      
  </section>
</template>

<script>
import bus from '@/components/bus.js'
import axios from "@/axios/api.js";
import ArtContent from "@/components/common/ArtCells/ArtContent";
import ArtBar from "@/components/common/ArtCells/ArtBar";
export default {
  components: {
    ArtContent,
    ArtBar
  },
  computed: {},
  data() {
    return {
      articles: {
        artBar: {
          // artCommentNum: 6086,
          // artIndex: 1,
          // artPraiseDownIcon: "#icon-web-icon-",
          // artPraiseNum: 1418,
          // artPraiseUpIcon: "#icon-web-icon-1",
          // commentIcon: "#icon-xiaoxi2",
          // shareIcon: "#icon-msnui-share",
          // shareNum: 308
        }
      }
    };
  },
  created() {
    this.getArt();
  },
  methods: {
    getArt: function() {
      let artIndex = 0;
      bus.$on('ArtIndex',(data) => {
        console.log("data:",data)
        artIndex = data;
      })
      axios.zuiyou_art("/art?id="+artIndex).then(res => {
        // console.log("res:", res);
        this.articles = res.articles[1];
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
  border-bottom: 0.5rem solid #ecebeb;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  text-align: left;
  box-sizing: border-box;
  padding: 0 0.3125rem;
}
</style>
