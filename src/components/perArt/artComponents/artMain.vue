<template>
  <section class="art_main">
      <ArtCell
        :articleCell="articlesList"
        ></ArtCell>
  </section>
</template>

<script>
import axios from "@/axios/api.js";
import ArtCell from "@/components/common/ArtCells/ArtCell";
export default {
  components: {
    ArtCell
  },
  data(){
      return {
          articlesList:{}
      }
  },
created() {
    this.getArtList();
  },
  methods: {
    getArtList: function() {
      axios.zuiyou_artList("/home/artList", "type=top&key=123456").then(res => {
        console.log("res:",res);
        this.articlesList = res.articles;
      });
    }
  }
};
</script>

<style>

</style>
