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
        <SubmissionConfirmation :quizID="this.quizID" />
        <v-divider></v-divider>
        <v-list dense nav>
            <v-list-item-group
                v-if="questions !== null"
                v-model="selectedQuestionIndex"
                color="primary"
                mandatory
            >
                <v-list-item
                    v-for="(question, index) in questions"
                    :key="question.id"
                >
                    <v-list-item-content
                        @click="selectQuestion(index)"
                        class="pa-2"
                        link
                    >
                        <v-row>
                            <v-col class="d-flex justify-center">
                                <v-icon v-if="index === 5" color="red">
                                    emoji_flags
                                </v-icon>
                                <v-icon v-else color="black">
                                    emoji_flags
                                </v-icon>
                                <v-list-item-title class="mr-2">
                                    Question {{ index + 1 }}
                                </v-list-item-title>
                                <v-icon
                                    v-if="questions[index].userAnswer !== null"
                                >
                                    check_circle
                                </v-icon>
                                <v-icon v-else color="white">circle </v-icon>
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { QuestionsQuery } from '../gql/queries/question'
import SubmissionConfirmation from './SubmissionConfirmation.vue'
export default {
    components: {
        SubmissionConfirmation,
    },
    props: {
        quizID: String,
        sidebarLoaded: Function,
        questionIndex: Number,
        answeredID: Number,
    },

    data() {
        return {
            questions: null,
            selectedQuestionIndex: 0,
        }
    },
    methods: {
        selectQuestion(index) {
            this.selectedQuestionIndex = this.questions[index].id
            this.$emit('selectQuestion', index, this.selectedQuestionIndex)
        },
    },
    created() {
        this.$emit('sidebarLoaded')
    },
    apollo: {
        questions: {
            query: QuestionsQuery,
            variables() {
                return {
                    quizID: this.quizID,
                }
            },
            update: (data) => {
                return data.userQuiz.questions
            },
        },
    },
    watch: {
        questionIndex() {
            this.selectedQuestionIndex = this.questionIndex
        },
    },
}
</script>
<style></style>
