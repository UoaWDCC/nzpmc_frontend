<template>
    <v-container>
        <v-card color="#385F73" dark style="max-width: 350px">
            <v-row>
                <v-col sm="8">
                    <h4 style="margin: 1rem">{{ ans }}</h4>
                </v-col>
                <v-col sm="4">
                    <v-icon style="margin: 1rem"> mdi-check-circle </v-icon>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        ans: String,
    },
}
</script>
