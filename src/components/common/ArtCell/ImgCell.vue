<template>
    <section class="art_img">
        <section class="img_wrap" v-for="(commentImg,key) in artImgCell" 
            :index="key"
            :class="{
                moreImgs: (artImgCell.length % 3) == 0 ? flag : !flag,
                oneImg: artImgCell.length == 1 ? flag : !flag,
                twoImgs: artImgCell.length == 2 ? flag : !flag
            }">
            <img  :src="commentImg" alt="pic" class="img">
        </section>
    </section>
</template>

<script>
export default {
  props: {
    artImgCell: Array
  },
  data() {
    return {
      flag: true
    };
  }
};
</script>

<style>
.art_img {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
}

.img_wrap {
  box-sizing: border-box;
  height: 6.25rem;
  max-height: 18.75rem;
  order: 1;
  padding: 0.1875rem;
  overflow: hidden;
  flex: 0 1 33.3333%;
}

.img_wrap.oneImg {
  box-sizing: border-box;
  width: 100%;
  height: 12.5rem;
  flex-grow: 1;
}
.img_wrap.twoImgs {
  flex-grow: 1;
  box-sizing: border-box;
  height: 9.375rem /* 150/16 */;
}
.img_wrap .img {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
