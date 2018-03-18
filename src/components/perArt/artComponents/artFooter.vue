<template>
    <footer>
        <form action="">
            <section id="foot_guid" >
                <section class="guid_item" >
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-yuyin"></use>
                        </svg>    
                    </span>
                </section>
                <section class="guid_item guid_item_i" >
                    <label for="">
                        <input type="text" >
                    </label>
                </section>
                <section class="guid_item guid_item_s guid_item_img" @click="getimg();">
                    <input type="file" accept="image/*" id="imgBtn">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tupian"></use>
                        </svg>
                    </span>
                </section>
                <section class="guid_item" >
                    <button type="submit"  class="sendBtn">发送</button>
                </section>
            </section>
        </form>
    </footer>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },

  methods: {
      getimg: function(){
          document.getElementById('imgBtn').click();
      }
  },

};
</script>

<style>
footer {
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;
  height: 2.5rem /* 40/16 */;
  background-color: #fff;
  z-index: 10;
}
#foot_guid {
  height: 3.125rem ;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 1px solid #ece9e9;
  align-items: center;
  
}
.guid_item {
  /* border: 1px solid #ccc; */
  text-align: center;
  height: 2.5rem;
  line-height: 1.5625rem /* 25/16 */;  
  flex-grow: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  box-sizing: border-box;
}
.icon {
    font-size: 1.5rem /* 24/16 */;
}
#imgBtn {
    display: none;
}
.guid_item_i{
    flex-grow: 2;
    line-height: 1.5625rem /* 25/16 */;
    
}
.guid_item_i input {
    width: 98%;
    height: 1.5625rem /* 25/16 */;
    outline: none;
    border: .0625rem /* 1/16 */ solid #ccc;
    border-radius: .1875rem /* 3/16 */;
}
.guid_item_img .icon{
    font-size: 1.75rem /* 28/16 */;
}
.sendBtn{
    width: 80%;
    height: 70%;
    border: none;
    color: #fff;
    font: 400 .875rem /* 14/16 */ "mocroslft yahei";
    text-align: center;
    border-radius: .1875rem /* 3/16 */;
    background-color: rgb(43, 135, 211);
}
</style>
