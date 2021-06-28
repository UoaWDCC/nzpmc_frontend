<template>
    <div align="center">
        <v-container style="max-width: 800px">
            <v-row>
                <v-card style="background-color: #ecf0f1; width: 800px">
                    <v-card-title align="start">
                        Question {{ questionIDIndex }}
                    </v-card-title>
                    <v-card-text align="start" style="color: black">
                        <latex :content="userQuiz.question" />
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
import { QuestionQuery } from '../gql/queries/question'
export default {
    props: {
        questionID: String,
        questionIDIndex: Number,
        quizID: String,
    },
    apollo: {
        userQuiz: {
            query: QuestionQuery,
            variables() {
                return {
                    quizID: this.quizID,
                    id: this.questionID,
                }
            },
        },
    },
}
</script>
