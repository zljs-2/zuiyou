<template>
  <header>
    <section id="searchWrap" v-if="artHome">
      <label for="search" id="search_icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-klmsousuo"></use>
        </svg>
      </label>
      <input type="search" name="search" id="search" class="search_edit"
        placeholder="搜索话题 / 帖子 / 用户"
      >
      <span id="edit">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bianji-copy"></use>
        </svg>
      </span>
    </section>
    <section id="artTitleWrap" v-if="perArt">
      <span class="back common" @click="$router.go(-1)">
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
  data(){
    return {}
  },
  props: {
    artHome: Boolean, 
    perArt: Boolean
  }
}
</script>

<style>
header {
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  height: 3.75rem;
  padding: 0.625rem 0.3125rem;
  margin-bottom: 0.625rem;
  box-sizing: border-box;
  background-color: #fff;
}
#searchWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  width: 100%;
  height: 1.5rem;
}
#search_icon {
  position: absolute;
  left: 0.3125rem;
  top: 0;
  display: block;
  width: 1.875rem;
  height: 1.5rem;
  line-height: 1.625rem;
  text-align: center;
  color: rgb(160, 159, 159);
}
.search_edit {
  line-height: 1.625rem;
  order: 0;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: center;
  margin: 0 5px;
}
#search {
  /* flex-grow: 5; */
  font-size: 0.75rem;
  padding: 0.1875rem 0 0.1875rem 1.875rem;
  border-radius: 0.375rem;
  border: 1px solid #e6e0e0;
  background-color: #f1f1f1;
  outline: none;

  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
#edit {
  text-align: center;
  line-height: 1.625rem;
  font-size: 1.375rem;
  color: dodgerblue;
  width: 2.5rem /* 40/16 */;
}
/* ************************************************************ */
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

