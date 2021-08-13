<template>
    <v-component v-if="searched === null">
        <ol v-for="user in users" :key="user">
            <v-card class="d-flex my-2 py-3 px-10 ml-4 mr-12">
                {{ user }}
                <v-btn icon small>
                    <v-icon class="material-icons">edit</v-icon>
                </v-btn>
                <v-btn icon small>
                    <v-icon class="material-icons">delete</v-icon>
                </v-btn>
            </v-card>
        </ol>
    </v-component>
    <v-component v-else>
        <v-card class="d-flex my-2 py-3 px-10 ml-4 mr-12">
            {{ searched }}
            <v-btn icon small>
                <v-icon class="material-icons">edit</v-icon>
            </v-btn>
            <v-btn icon small>
                <v-icon class="material-icons">delete</v-icon>
            </v-btn>
        </v-card>
    </v-component>
</template>

<script>
import { searchedUser } from './../components/UserSearchBar.vue'
export default {
    data() {
        return {
            users: ['Daniel', 'Will', 'CZ', 'Ruby', 'Matthew', 'Alex', 'Lance'],
            searched: searchedUser,
        }
    },
}
</script>
