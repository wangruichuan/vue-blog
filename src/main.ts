import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 测试专用
// import test  from '@/components/Pager/test.vue'
// const app = createApp(test)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
