<template>
<footer>
    <section id="foot_guid" v-if="artHome">
      <section
          v-for="(item,index) in order" 
            :index="index" 
            @click="gotoAddress(item.toPath);"
            v-bind:class="{
                guid_item: hasClass, 
                active: item.isChoose
            }"
          >
          <section class="icon_name">
            <section class="guid_item_icon flex-1 flex-align-center">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
            </section>
            <section class="guid_item_name  flex-align-center">
              {{item.name}}
            </section>
          </section>
      </section>
    </section>
    <form action="" v-if="perArt">
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
      isActive: true,
      hasClass: true,
      nowIndex: 0,
      order: [
        {
          icon: "#icon-shuaxin",
          chooseIcon: "",
          name: "最右",
          toPath: "/home",
          isChoose: false
        },
        {
          icon: "#icon-tupian1",
          chooseIcon: "icon-tupiantianchong",
          name: "跟拍",
          toPath: "/pat",
          isChoose: false
        },
        {
          icon: "#icon-huojian",
          chooseIcon: "icon-huojian1",
          name: "话题",
          toPath: "/topic",
          isChoose: false
        },
        {
          icon: "#icon-xiaoxi",
          chooseIcon: "icon-xiaoxi1",
          name: "消息",
          toPath: "/message",
          isChoose: false
        },
        {
          icon: "#icon-wodeweixuanzhong",
          chooseIcon: "icon-wodexuanzhong",
          name: "我的",
          toPath: "/profile",
          isChoose: false
        }
      ]
    };
  },
  props: {
    artHome: Boolean,
    perArt: Boolean
  },
  methods: {
    gotoAddress: function(path) {
      // 传入需要跳转路由名称
      this.$router.push(path); // 跳转到指定路由
    }
  }
};
</script>

<style>
footer {
  width: 100%;
  height: 3.125rem;
  background-color: #fff;
  z-index: 10;
}
.active {
  color: #8684f5;
}
#foot_guid {
  height: 3.125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 1px solid #ece9e9;
}
.guid_item {
  text-align: center;
  line-height: 3.125rem;
  order: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: center;
}
.icon_name {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  line-height: 100%;
  width: 70%;
  margin: 0 auto;
}
.guid_item_icon {
  box-sizing: border-box;
  width: 100%;
  font-size: 1.625rem;
  padding: 0.25rem 0.375rem 0.25rem 0.625rem;
}
.guid_item_name {
  font-size: 0.625rem;
  height: 0.875rem;
  line-height: 0.875rem;
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

/* /************************************************************* */
/* #foot_guid {
  height: 3.125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 1px solid #ece9e9;
  align-items: center;
}
.guid_item {
  text-align: center;
  height: 3.125rem;
  line-height: 3.125rem;
  flex-grow: 0;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: center;
  box-sizing: border-box;
} */
.icon {
  font-size: 1.5rem;
}
#imgBtn {
  display: none;
}
.guid_item_i {
  flex-grow: 2;
}
.guid_item_i input {
  width: 98%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-size: 1.125rem;
  border-radius: 0.1875rem;
}
.guid_item_img .icon {
  font-size: 1.75rem;
}
.sendBtn {
  width: 80%;
  height: 50%;
  border: none;
  color: #fff;
  font: 400 0.875rem "mocroslft yahei";
  text-align: center;
  border-radius: 0.1875rem;
  background-color: rgb(43, 135, 211);
}
</style>
