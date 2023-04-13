import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css';

// Animations
import VueMotions from 'vue-motions'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// App
const app = createApp(App)

app.use(vuetify)
app.use(VueMotions)

app.mount('#app')
