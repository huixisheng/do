import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'

Vue.use(iView)

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    // @TODO 为何会报错
    // iview组件有多处引入import Vue from 'vue'; 用来初始化
    // /Users/huixisheng/x/do/segmentfault-1010000009974881/node_modules/iview/src/components/base/notification/index.js:
    // 1  import Notification from './notification.vue';  message/notice 有用到
    // 2: import Vue from 'vue';
    // 3
    // 4  Notification.newInstance = properties => {
    //
    // /Users/huixisheng/x/do/segmentfault-1010000009974881/node_modules/iview/src/components/date-picker/picker.vue:
    //    30:     import Vue from 'vue';
    //
    // /Users/huixisheng/x/do/segmentfault-1010000009974881/node_modules/iview/src/components/loading-bar/loading-bar.js:
    //
    //     2: import Vue from 'vue';
    //     3
    //     4  LoadingBar.newInstance = properties => {
    //
    // /Users/huixisheng/x/do/segmentfault-1010000009974881/node_modules/iview/src/components/modal/confirm.js:
    //     1: import Vue from 'vue';
    //
    // /Users/huixisheng/x/do/segmentfault-1010000009974881/node_modules/iview/src/locale/index.js:
    //     4: import Vue from 'vue';
    // this.$Message.info('测试iView是否生效')
  }
})
