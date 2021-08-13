<template>
    <v-row>
        <v-col class="col-12">
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
