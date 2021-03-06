import Vue from 'vue'
import MuseUI from 'muse-ui'
// import '../dist/wmvui.css'
// import '../src/styles/vars.scss'
import './assets/scss/WMlib.scss'
import App from './App.vue'
import markdownElement from './components/markdownElement'
import codeExample from './components/codeExample'
import apiView from './components/apiView'
import router from './router'
import FastClick from 'fastclick'
import './i18n'

Vue.use(MuseUI)
Vue.component('markdown-element', markdownElement)
Vue.component('code-example', codeExample)
Vue.component('api-view', apiView)
FastClick.attach(document.body)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

/*eslint-disable*/
new Vue({
  router,
  ...App
}).$mount('#app')
