<template>
<<<<<<< HEAD
    <div class="welcome">
        <h1>This is a welcome page</h1>
        <v-container style="background-color: #ecf0f1; max-width: 1200px">
            <img
                class="logo"
                alt="NZPMC logo"
                src="../assets/nzpmclogo.jpg"
                width="400"
            />
            <h1>
                Welcome to New Zealand Physics and Mathematics Competition 2021!
            </h1>
            <p>{{ users }}</p>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Des5TrztWRU"
                title="YouTube video player"
                frameborder="10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <v-container class="d-flex justify-center mb-6" max-width="10%">
                <v-btn
                    @click="redirectToExam()"
                    x-large
                    color="#03a9f4"
                    style="max-width: 100%"
                    >I'm ready!</v-btn
                >
            </v-container>
        </v-container>
    </div>
=======
    <v-container>
        <v-toolbar
            class="rounded-bl-xl rounded-br-0"
            style="position: fixed; top: 0; right: 0; z-index: 1"
            collapse
        >
            <SignOutMenu />
        </v-toolbar>
        <v-row class="justify-center">
            <v-col class="col-12 col-xl-8">
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
            <v-col class="col-12 col-xl-8">
                <v-card class="pa-4" elevation="2">
                    <v-row>
                        <v-col class="col-12 col-md-6">
                            <h1>Kia ora!</h1>
                            <p>
                                Welcome to the New Zealand Physics and
                                Mathematics Competition 2021. Please ensure you
                                have watched the introduction video before you
                                start.
                            </p>
                        </v-col>
                        <v-col class="col-12 col-md-6">
                            <v-responsive
                                style="width: 100%"
                                :aspect-ratio="16 / 9"
                            >
                                <iframe
                                    style="width: 100%; height: 100%"
                                    src="https://www.youtube.com/embed/Des5TrztWRU"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </v-responsive>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="col-12 text-center">
                            <v-btn to="/exam" large color="primary">
                                I'm ready!
                                <v-icon right class="material-icons">
                                    navigate_next
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
>>>>>>> master
</template>
<script>
<<<<<<< HEAD
import gql from 'graphql-tag'
=======
import SignOutMenu from './../components/SignOutMenu.vue'

>>>>>>> master
export default {
    components: {
        SignOutMenu,
    },
    data() {
        return {
            users: null,
        }
    },
    apollo: {
        users: gql`
            query {
                users {
                    id
                    displayName
                    email
                    emailVerified
                    photoURL
                    firstName
                    lastName
                    yearLevel
                    role
                    created
                    modified
                }
            }
        `,
    },
}
</script>
