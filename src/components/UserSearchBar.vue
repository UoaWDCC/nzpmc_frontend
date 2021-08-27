<template>
    <v-card class="mt-8 mb-15">
        <v-toolbar>
            <v-toolbar-title>Start typing to search...</v-toolbar-title>
            <v-autocomplete
                v-model="searchedUser"
                :items="users"
                cache-items
                solo
                clearable
                filled
                dense
                chips
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="User"
            ></v-autocomplete>
            <CreateUser />
        </v-toolbar>
    </v-card>
</template>

<script>
import CreateUser from '../components/CreateUser.vue'

export default {
    data() {
        return {
            users: ['Daniel', 'Will', 'CZ', 'Ruby', 'Matthew', 'Alex', 'Lance'],
            searchedUser: null,
        }
    },
    components: {
        CreateUser,
    },
}
</script>
