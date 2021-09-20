<template>
    <v-row style="height: 100%">
        <v-col>
            <UserSearchBar @search="setSearch" @notification="notification" />
            <UserDisplay :search="search" />
            <v-snackbar v-model="snackbar" :timeout="snackbarTimeout">
                {{ snackbarText }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-col>
    </v-row>
</template>

<script>
import UserSearchBar from './../components/UserSearchBar.vue'
import UserDisplay from './../components/UserDisplay.vue'

export default {
    components: {
        UserSearchBar,
        UserDisplay,
    },
    data() {
        return {
            search: null,
            snackbar: false,
            snackbarText: 'New User Created',
            snackbarTimeout: 3000,
        }
    },
    methods: {
        setSearch(searchString) {
            this.search = searchString
        },
        notification(firstName, lastName) {
            this.snackbar = true
            this.snackbarText = `User Created: ${firstName} ${lastName}`
        },
    },
}
</script>
