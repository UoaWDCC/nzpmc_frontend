import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueLaTeX2JS from './plugins/latex'

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    VueLaTeX2JS,
    render: (h) => h(App),
}).$mount('#app')
