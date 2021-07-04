<template>
    <v-navigation-drawer permanent class="questionDrawer" style="width: 100%">
        <v-list-item>
            <v-list-item-content>
                <img
                    style="width: 100%; max-width: 300px"
                    class="d-block mx-auto"
                    alt="NZPMC Logo"
                    src="../assets/logo.png"
                />
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
            <v-list-item-group
                v-if="userQuiz !== null"
                v-model="selectedQuestionID"
                color="primary"
                mandatory
            >
                <v-list-item
                    v-for="(question, index) in userQuiz.questions"
                    :key="question.id"
                    link
                >
                    <v-list-item-content
                        @click="selectQuestion(index)"
                        color="#00008B"
                        class="px-2"
                        link
                    >
                        <v-list-item-title>
                            Question {{ index + 1 }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { QuestionsQuery } from '../gql/queries/question'
export default {
    props: {
        quizID: String,
    },

    data() {
        return {
            userQuiz: null,
            drawer: null,
            selectedQuestionID: null,
        }
    },

    watch: {
        drawer(val) {
            if (val === true) {
                this.$emit('drawerOpen')
            } else {
                this.$emit('drawerClosed')
            }
        },
    },
    methods: {
        selectQuestion(index) {
            this.selectedQuestionID = this.userQuiz.questions[index].id
            this.$emit('selectQuestion', index, this.selectedQuestionID)
        },
    },
    apollo: {
        userQuiz: {
            query: QuestionsQuery,
            variables() {
                return {
                    quizID: this.quizID,
                }
            },
        },
        // update: (data) => data.QuestionsQuery,
    },
}
</script>
<style></style>
