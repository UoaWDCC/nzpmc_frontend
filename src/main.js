import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCxuVkCJKSK-Aj4BSTFjIMxV2waTy5DSVM',
    authDomain: 'nzpmc-backend.firebaseapp.com',
    projectId: 'nzpmc-backend',
    storageBucket: 'nzpmc-backend.appspot.com',
    messagingSenderId: '724631434702',
    appId: '1:724631434702:web:080de4fa10b968768c679f',
    measurementId: 'G-41S1NG62PR',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Run user login checks
router.beforeEach((to, from, next) => {
    console.log(firebase.auth().currentUser)
    if (to.matched.some((record) => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next()
        } else {
            next({
                path: '/',
            })
        }
    } else {
        next()
    }
})

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount('#app')
