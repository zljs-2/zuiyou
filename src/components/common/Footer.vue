<template>
<footer>
    <section id="foot_guid" >
      <section
          v-for="(item,index) in order" 
            :index="index" 
            @click="gotoAddress(index,item.toPath);nowIndex = -1;"
            v-bind:class="{
                guid_item: hasClass, 
                active: nowIndex = -1 ? item.isChoose : !item.isChoose
            }"
          >
        {{item.name}}
      </section>
    </section>
    </footer>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasClass: true,
      nowIndex:-2,
      order:[
        {
          name: '最右',
          toPath: '/home',
          isChoose: false
        },
        {
          name: '跟拍',
          toPath: '/photo',          
          isChoose: false
        },
        {
          name: '话题',
          toPath: '/artical',
          isChoose: false
        },
        {
          name: '消息',
          toPath: '/message',
          isChoose: false
        },
        {
          name: '我的',
          toPath: '/profile',
          isChoose: false
        }
      ]
    };
  },

  methods: {
    gotoAddress(index,path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
      this.order[index].isChoose = this.isActive;   
      // console.log(index,this.order)     
    }
  },
  watch:{
      changeCard:function(newVal,oldVal){
        // console.log("new:",newVal);
        // console.log("old:",oldVal)
      }
    },
    computed:{
      changeCard:function(){
        // let _this = this;
        // _this.order.forEach(function(orders){
        //   orders.isChoose = false;
        // })
        // return this.order;

        
      }
    }
};
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.125rem;
}
.active {
  color: #8684f5;
}
#foot_guid {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 1px solid #ece9e9;
}
.guid_item {
  /* border: 1px solid #ccc; */
  text-align: center;
  line-height: 3.125rem;
  order: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: center;
}
</style>
