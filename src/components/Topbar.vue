<template>
    <v-card elevation="2">
        <v-toolbar>
            <v-app-bar-nav-icon
                @click="toggleSidebar()"
                class="d-md-none"
            ></v-app-bar-nav-icon>

            <v-toolbar-title> Exam </v-toolbar-title>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggleSidebar')
        },
    },
}
</script>
