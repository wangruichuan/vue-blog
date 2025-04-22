import './mock'
import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineComponent } from 'vue'
import vLoading from '@/directives/loading'
import vLazy from '@/directives/lazy'
import App from './App.vue'
import router from './router'


// 测试专用
// import test  from '@/components/Empty/test.vue'
// import test  from '@/components/ImageLoader/test.vue'
// import test  from '@/components/SiteAside/test.vue'
// import test  from '@/components/Layout/test.vue'
// import MessageArea  from '@/components/MessageArea/index.vue'

// import * as blogApli from '@/api/blog'



const app = createApp(App)
app.directive('loading',vLoading)
app.directive('lazy',vLazy)
app.use(createPinia())
app.use(router)
app.mount('#app')
