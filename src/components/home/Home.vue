<template>
  <section id="home" class="flex flex-v">
      <headTop :perArt="perArt" :artHome="artHome"></headTop>
      <section class=" art flex-1 flex-align-center flex-pack-center flex-pack-justify">
        <articles></articles>
      </section>
      <footerButton :perArt="perArt" :artHome="artHome"></footerButton>
  </section>
</template>

<script>
import headTop from "../common/Header";
import articles from "./arts/Articles";
import footerButton from "../common/Footer";

export default {
  data() {
    return {
      artHome: true,
      perArt: false,
      
    };
  },
  components: {
    headTop,
    articles,
    footerButton
  }
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
}

#home {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
}

.art {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  overflow: auto; /* winphone8和android4+ */
  -webkit-overflow-scrolling: touch; /* ios5+ */
}

/* ============================================================

flex：定义布局为盒模型

flex-v：盒模型垂直布局

flex-1：子元素占据剩余的空间

flex-align-center：子元素垂直居中

flex-pack-center：子元素水平居中

flex-pack-justify：子元素两端对齐

兼容性：ios 4+、android 2.3+、winphone8+

============================================================ */

.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flex-v {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.flex-align-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex-pack-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex-pack-justify {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
} 

</style>
