<template>
    <v-card class="pa-4 fill-height" elevation="2">
        <v-card-title>Question {{ questionIndex + 1 }}</v-card-title>
        <v-card-text>
            <latex :content="question.question" />
        </v-card-text>
        <img
            style="width: 100%; max-width: 300px"
            alt="question image"
            v-bind:src="question.imageURI"
        />
    </v-card>
</template>
<script>
import { QuestionsQuery } from '../gql/queries/question'
export default {
    props: {
        questionIndex: Number,
        quizID: String,
    },
    data() {
        return {
            userQuiz: null,
        }
    },
    computed: {
        question: userQuiz.questions[questionIndex],
    },
    apollo: {
        userQuiz: {
            query: QuestionsQuery,
            variables: {
                quizID: this.quizID,
            },
        },
    },
}
</script>
