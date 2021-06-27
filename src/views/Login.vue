<template>
    <v-container>
        <v-row class="justify-center">
            <v-col class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <v-card class="pa-4" elevation="2">
                    <v-row>
                        <v-col class="col-12">
                            <img
                                style="width: 100%; max-width: 300px"
                                class="d-block mx-auto"
                                alt="NZPMC Logo"
                                src="../assets/logo.png"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <v-card class="pa-4" elevation="2">
                    <v-row>
                        <v-col class="text-start">
                            <h1>Login</h1>
                        </v-col>
                    </v-row>
                    <form @submit.prevent="login">
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="email"
                                    :rules="[rules.required, rules.email]"
                                    label="Email"
                                    color="#03a9f4"
                                    prepend-icon="mdi-account-circle"
                                    autocomplete="username"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="password"
                                    :rules="[rules.required]"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"
                                    label="Password"
                                    color="#03a9f4"
                                    prepend-icon="mdi-lock"
                                    :append-icon="
                                        showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    autocomplete="current-password"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-if="this.loginError">
                            <v-col>
                                <v-alert type="error">{{
                                    this.loginError
                                }}</v-alert>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="text-right">
                                <v-btn large color="primary" type="submit"
                                    >Login</v-btn
                                >
                            </v-col>
                        </v-row>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.v-input__prepend-outer {
    margin-right: 0.5rem;
}
</style>

<script>
import firebase from 'firebase'
import { onLogin } from '../vue-apollo'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            loginError: null,
            showPassword: false,
            rules: {
                required: (value) => !!value || 'Required.',
                email: (value) => {
                    const pattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
                emailMatch: () =>
                    'The email and password you entered do not match',
            },
        }
    },
    methods: {
        async login() {
            await firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .catch((error) => {
                    this.loginError = error.message
                })
            const res = await firebase.auth().currentUser.getIdToken(true)
            onLogin(this.$apollo.provider.defaultClient, res)
            this.$router.push('/welcome')
        },
    },
}
</script>
