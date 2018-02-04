// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 目录下的app.vue组件 
import App from './App';
import router from './router';

// 引入element-ui组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import AppComponent from './App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
