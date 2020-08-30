// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css' // Iconfont-阿里巴巴矢量图标库
import './assets/style/style.styl' // stylus预编译语言
import 'animate.css' // 强大的跨平台的预设css3动画库
import VueRouter from 'vue-router' //使用路由功能
import routes from './router/index'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass:'is-active',
  routes,
  mode: 'history'
})
/*router */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App)
});
