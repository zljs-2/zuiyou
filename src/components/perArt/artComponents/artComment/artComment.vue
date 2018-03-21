<template>
    <article class="per_art_comment_list">
        <section id="per_art_comment_head"></section>
        <section v-for="(item,index) in comments" class="per_art_comment">
            <ArtCommentCell 
                :articleCommentCell="item" 
                :index ="index" 
                :artHome="artHome" 
                :perArt="perArt">
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
        return {
            artHome:false,
            perArt:true
        }
    },
    props:{
        comments: Array
    }
}
</script>

<style >
#per_art_comment_head{
    height: 2.5rem /* 40/16 */;
}
.per_art_comment{
  border-top: 1px solid rgb(228, 228, 228);
}
</style>
