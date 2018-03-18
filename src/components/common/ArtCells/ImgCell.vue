<template>
    <section class="art_img">
        <section class="img_wrap" v-for="(commentImg,key) in artImgCell" 
            :index="key"
            :class="{
                flex_grow: (artImgCell.length % 3) == 0 ? flag : !flag,
                oneImg: artImgCell.length == 1 ? flag : !flag,
                twoImgs: artImgCell.length == 2 ? flag : !flag
            }">
            <img  :src="commentImg" alt="pic" class="img">
        </section>
    </section>
</template>

<script>
export default {
    props:{
        artImgCell: Array
    },
    data() {
        return {
        flag: true
        };
    },
}
</script>

<style>
.art_img {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 100%;
  min-width: 6.25rem;
  min-height: 6.25rem;
  margin: 0 auto;
  width: 100%;
  
}
.flex_grow {
  flex-grow: 1;
}
.img_wrap {
  order: 1;
  box-sizing: border-box;
  width: 6.25rem;
  height: 6.25rem;
  max-height: 12.5rem;
  /* min-height: 4.375rem; */
  margin: 0.1875rem;
  overflow: hidden;
}
.art_img .img {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.art_img .oneImg {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
.art_img .twoImgs {
  flex-grow: 1;
  box-sizing: border-box;
  height: 9.375rem;
}
</style>
