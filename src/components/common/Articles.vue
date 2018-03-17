<template>
  <section id="art_warp">
      <section id="art">
          <article v-for="(item,index) in articlesList" :index="index">
            <art-cell 
              :articleCell="item"
              :index="index">
            </art-cell>
          </article>
      </section>
  </section>
</template>

<script>
// import timg from "@/assets/timg.jpg";
import axios from "@/axios/api.js";
import ArtCell from "./ArtCell";
export default {
  components: {
    ArtCell
  },
  created() {
    this.getArtList();
  },
  data() {
    return {
      articlesList: []
    };
  },
  methods: {
    gotoAddress(path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
    },
    getArtList: function() {
      axios.zuiyou_artList('/home/artList','type=top&key=123456')
        .then(res => {
          console.log(res);
          this.articlesList = res.articles;
        })
    }
  }
};
</script>

<style scoped>
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

</style>
