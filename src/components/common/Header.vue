<template>
  <header>
    <section id="searchWrap">
      
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
  </header>
</template>
<style>
header {
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  height: 3.75rem ;
  padding: .625rem  .3125rem  ;
  margin-bottom: .625rem ;
  box-sizing: border-box;
  background-color: #fff;
}
#searchWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  width:100%;
  height: 1.5rem /* 24/16 */;
}
#search_icon {
  position: absolute;
  left: .3125rem /* 5/16 */;
  top: 0;
  display: block;
  width: 1.875rem /* 30/16 */;
  height: 1.5rem /* 24/16 */;
  line-height: 1.625rem;
  text-align: center;
  color: rgb(160, 159, 159);
}
.search_edit {
  line-height: 1.625rem /* 26/16 */;
  order: 0;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: center;
  margin: 0 5px;
}
#search {
  flex-grow: 5;
  font-size: .75rem /* 12/16 */;
  padding: .1875rem /* 3/16 */ 0  .1875rem  1.875rem /* 30/16 */;
  border-radius: .375rem /* 6/16 */;
  border: 1px solid #e6e0e0;
  background-color: #f1f1f1;
  outline: none;
}
#edit {
  text-align: center;
  line-height: 1.625rem /* 26/16 */;
  display: inline-block;
  flex-grow: 1;
  font-size: 1.375rem /* 22/16 */;
  color: dodgerblue;
}
</style>

