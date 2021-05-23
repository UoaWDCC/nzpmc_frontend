<template>
    <div align="center">
        <v-container style="max-width: 800px">
            <v-row>
                <v-card style="background-color: #ecf0f1; width: 800px">
                    <v-card-title align="start"> Question 1 </v-card-title>
                    <v-card-text align="start" style="color: black">
                        <latex :content="someVariable" />
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row style="padding: 2rem 0rem">
                <v-card
                    style="background-color: #ecf0f1"
                    align="center"
                    justify="center"
                >
                    <v-img
                        alt="NZPMC Logo"
                        src="../assets/nzpmclogo.jpg"
                        style="width: 800px"
                    >
                    </v-img>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            someVariable: String.raw`What is the area of the circle shown below?`,
        }
    },
}
</script>
