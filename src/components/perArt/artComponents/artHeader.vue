<template>
  <header>
    <section id="artTitleWrap" >
      <span class="back common" @click="$router.back(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </span>
      <span class="artTitle">
        帖子详情
      </span>
      <span id="edit" class="common">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </span>
    </section>
  </header>
</template>
<script>
export default {

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  height: 2.5rem /* 40/16 */;
  padding: 0.625rem 0.3125rem;
  margin-bottom: 0.625rem;
  box-sizing: border-box;
  background-color: #fff;
}

#artTitleWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 2.5rem;
  line-height: 2.5rem;
  justify-content:space-between;
}
#artTitleWrap .artTitle {
  height: 2.5rem /* 50/16 */;
  flex-grow:1;
}
#artTitleWrap .common {
  font-size: 1.375rem;
  color: rgb(143, 143, 143);
  width: 2.5rem /* 40/16 */;
}
</style>

