<template>
    <v-row>
        <v-col>
            <UserSearchBar @search="setSearch" />
            <UserDisplay :search="search" />
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
        }
    },
    methods: {
        setSearch(searchString) {
            this.search = searchString
        },
    },
}
</script>
