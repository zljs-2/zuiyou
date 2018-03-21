<template>
    <section class="art_bar" @click="">
            <section class="art_shareNum art_bar_item">
                <svg class="icon art_bar_icon" aria-hidden="true">
                    <use :xlink:href="artBarCell.shareIcon"></use>
                </svg>
                {{artBarCell.shareNum}}
            </section>
            <section class="art_commentNum art_bar_item" @click="gotoAddress('/art?id='+artBarCell.artIndex)">
                <svg class="icon art_bar_icon" aria-hidden="true">
                    <use :xlink:href="artBarCell.commentIcon"></use>
                </svg>
                {{artBarCell.artCommentNum}}
            </section>
            <section class="art_praise_wrap art_bar_item">
                <span class="art_praise art_praiseUp">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use :xlink:href="artBarCell.artPraiseUpIcon"></use>
                    </svg>
                </span>
                <span class="art_praiseNum">
                    {{artBarCell.artPraiseNum}}
                </span>
                <span class="art_praise art_praiseDown">
                    <svg class="icon art_bar_icon" aria-hidden="true">
                        <use :xlink:href="artBarCell.artPraiseDownIcon"></use>
                    </svg>
                </span>
            </section>
        </section>
</template>

<script >
export default {
    props:{
        artBarCell: Object
    },
    data() {
        return {}
    },
  methods: {
    gotoAddress(path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
    }
  }
}
</script>

<style scoped>
.art_bar {
  width: auto;
  height: 1.875rem;
  line-height: 1.875rem;
  font-size: 0.875rem;
  margin: 0.625rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  color: rgb(167, 167, 167);
}
.art_bar_item {
  flex-grow: 1;
  text-align: left;
  box-sizing: border-box;
  padding: 0.3125rem;
}
.art_praise_wrap {
  text-align: right;
}
.art_bar_icon {
  font-size: 1rem;
}
</style>
