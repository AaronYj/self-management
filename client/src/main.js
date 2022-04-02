import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

import FullCalendar from 'vue-full-calendar' //全局
import moment from "moment"
import 'fullcalendar/dist/fullcalendar.css'

Vue.use(FullCalendar)

Vue.use(VueAxios, axios)

Vue.use(ElementUI)
Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
