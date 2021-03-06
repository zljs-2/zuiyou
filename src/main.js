// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import iconfont from './iconfont/iconfont'
// import footerButton from '@/components/common/Footer'
Vue.config.productionTip = false

require('@/mock/articleList.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
