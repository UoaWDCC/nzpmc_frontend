<template>
    <v-card class="mt-8 mb-15">
        <v-toolbar>
            <v-toolbar-title>Start typing to search...</v-toolbar-title>
            <v-text-field
                class="mx-4"
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <CreateUser />
        </v-toolbar>
    </v-card>
</template>

<script>
import CreateUser from '../components/CreateUser.vue'

export default {
    components: {
        CreateUser,
    },
    data() {
        return {
            users: ['Daniel', 'Will', 'CZ', 'Ruby', 'Matthew', 'Alex', 'Lance'],
            search: null,
        }
    },
    watch: {
        search(val) {
            console.log('emitting')
            this.$emit('search', val)
        },
    },
}
</script>
