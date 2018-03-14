<template>
  <header>
    <section id="searchWrap">
      <label for="search" id="search_icon">1</label><input type="search" name="search" id="search" class="search_edit"
        placeholder="搜索话题 / 帖子 / 用户"
      >
      <span id="edit">1</span>
    </section>
  </header>
</template>
<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.625rem /* 26/16 */;
  padding: .625rem /* 10/16 */ .3125rem /* 5/16 */;
  box-sizing: border-box;
}
#searchWrap {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
}
#search_icon {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 1.875rem /* 30/16 */;
  height: 1.625rem /* 26/16 */;
  line-height: 1.625rem;
  text-align: center;
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
  padding: .1875rem /* 3/16 */ 0  .1875rem  1.875rem /* 30/16 */;
  border-radius: 1.625rem /* 26/16 */;
  border: 1px solid #e6e0e0;
  background-color: #f1f1f1;
  outline:none
}
#edit {
  text-align: center;
  line-height: 1.625rem /* 26/16 */;
  display: inline-block;
  border: 1px solid #ccc;
  flex-grow: 1;
}
</style>

