<template>
    <v-card class="pa-4 fill-height" elevation="2">
        <v-card-title>Question {{ questionIndex + 1 }}</v-card-title>
        <v-card-text>
            <latex :content="quizID" />
        </v-card-text>
        <img
            style="width: 100%; max-width: 300px"
            alt="question image"
            v-bind:src="quizID"
        />
    </v-card>
</template>
<script>
import { QuestionsQuery } from '../gql/queries/question'
export default {
    props: {
        questionID: String,
        questionIndex: Number,
        quizID: String,
    },
    data() {
        return {
            userQuiz: null,
            ID: this.quizID,
        }
    },
    apollo: {
        userQuiz: {
            query: QuestionsQuery,
            variables: {
                quizID: this.ID,
            },
        },
    },
}
</script>
