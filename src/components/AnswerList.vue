<template>
    <v-container style="background-color: #ecf0f1; max-width: 400px">
        <div
            style="padding-bottom: 20px"
            v-for="option in userQuiz.option"
            :key="option.id"
        >
            <SingleAnswer
                :ans="option.option"
                :optionID="option.id"
                :selectedID="currentOptionID"
                @selectanswer="selectOneAnswer"
            />
        </div>
        <v-btn
            style="max-width: 100%; color: white; background-color: #03a9f5"
            x-large
        >
            Next
        </v-btn>
    </v-container>
</template>

<script>
import SingleAnswer from './SingleAnswer.vue'
import { OptionsQuery } from '../gql/queries/option'

export default {
    components: {
        SingleAnswer,
    },
    methods: {
        selectOneAnswer(number) {
            this.currentOptionID = number
        },
    },
    props: {
        questionID: String,
        quizID: String,
    },
    data() {
        return {
            currentOptionID: null,
        }
    },
    apollo: {
        userQuiz: {
            query: OptionsQuery,
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
