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
            <CreateUser @notification="notification" />
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
            search: null,
        }
    },
    watch: {
        search(val) {
            this.$emit('search', val)
        },
    },
    methods: {
        notification(firstName, lastName) {
            this.$emit('notification', firstName, lastName)
        },
    },
}
</script>
