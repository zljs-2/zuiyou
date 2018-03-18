<template>
  <section id="art_warp">
      <section id="art">
          <article v-for="(item,index) in articlesList" :index="index">
            <ArtCell
              :articleCell="item"
              :index="index">
            </ArtCell>
          </article>
      </section>
  </section>
</template>

<script>
import axios from "@/axios/api.js";
import ArtCell from "./ArtCells/ArtCell";
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
      axios.zuiyou_artList('/home/artList')
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


</style>
