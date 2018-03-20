<template>
    <article class="per_art_comments">
        <section v-for="(item,index) in comments" >
            <ArtCommentCell 
                :articleCommentCell="item" 
                :index ="index">
            </ArtCommentCell>
        </section>
    </article>
</template>

<script>
import ArtCommentCell from "@/components/common/ArtCells/ArtCommentCell"
export default {
    components: {
        ArtCommentCell
    },
    data(){
        return {}
    },
    props:{
        comments: Array
    }
}
</script>

<style >
.art_comment_wrap.art_comment_wrap_per{
  border-top: 1px solid rgb(228, 228, 228);
}
</style>
