import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  //iconfont: 'mdi',  
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
