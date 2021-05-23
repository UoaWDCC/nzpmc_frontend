<template>
    <div>
        <h1>This is an exam page</h1>
        <v-card>
            <v-navigation-drawer permanent expand-on-hover>
                <v-list
                    v-for="question in questions"
                    :key="question.no"
                    nav
                    dense
                >
                    <v-list-item class="px-2" link>
                        <v-list-item-icon>
                            <v-icon>mdi-star</v-icon>
                            <v-list-item-title>{{
                                question.no
                            }}</v-list-item-title>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            questions: [
                { no: ' Question 1 ' },
                { no: ' Question 2 ' },
                { no: ' Question 3 ' },
                { no: ' Question 4 ' },
            ],
        }
    },
}
</script>
<style></style>
