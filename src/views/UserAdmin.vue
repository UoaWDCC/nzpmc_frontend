<template>
    <v-row>
        <v-col>
            <UserSearchBar />
            <UserDisplay />
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
}
</script>
