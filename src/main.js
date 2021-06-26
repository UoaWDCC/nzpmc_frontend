import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueLaTeX2JS from './plugins/latex'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig.json'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Run user login checks
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.matched.some((record) => record.meta.authRequired)) {
        // When the requested page requires authentication
        if (firebase.auth().currentUser) {
            next()
        } else {
            next({
                path: '/',
            })
            document.title = 'Login - NZPMC'
        }
    } else {
        // No authentication needed
        next()
    }
})

Vue.config.productionTip = false

// Load app when authentication status received
window.firebaseLoaded = false
firebase.auth().onAuthStateChanged(function (user) {
    if (!window.firebaseLoaded) {
        const app = new Vue({
            vuetify,
            router,
            VueLaTeX2JS,
            render: (h) => h(App),
        }).$mount('#app')
        window.firebaseLoaded = true
    } else {
        if (user) {
            // New user, show welcome page
            router.push('/welcome')
        } else if (!user) {
            // Logged out, show login
            router.push('/')
        }
    }
})

window.signOut = function () {
    firebase.auth().signOut()
    console.log(
        'signOut() is a temporary function not intended for production.',
    )
}
