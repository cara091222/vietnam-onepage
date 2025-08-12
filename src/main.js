import { createApp } from 'vue'
import App from './App.vue'

import $ from 'jquery' // 引入 jQuery
window.$ = $           // 掛到全域
window.jQuery = $

createApp(App).mount('#app')
