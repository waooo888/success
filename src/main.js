import Vue from "vue";

import router from './router/index.js'

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import App from './App.vue'
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
}).$mount();