<template>
    <v-card elevation="2">
        <v-toolbar>
            <v-app-bar-nav-icon
                @click="toggleSidebar()"
                class="d-md-none"
            ></v-app-bar-nav-icon>

            <v-toolbar-title> Exam </v-toolbar-title>

            <v-spacer></v-spacer>

            <SignOutMenu />
        </v-toolbar>
    </v-card>
</template>

<script>
import SignOutMenu from './SignOutMenu.vue'
export default {
    components: {
        SignOutMenu,
    },
    data: () => ({
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
    }),
    methods: {
        toggleSidebar() {
            this.$emit('toggleSidebar')
        },
    },
}
</script>
