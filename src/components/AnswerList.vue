<template>
    <div align="center">
        <v-container style="background-color: #ecf0f1; max-width: 400px">
            <div
                style="padding-bottom: 20px"
                v-for="answer in answers"
                :key="answer"
            >
                <SingleAnswer
                    :ans="answer.text"
                    :isSelected="answer.isSelected"
                    :answerID="answer.id"
                    :IDRetriever="selectOneAnswer"
                />
            </div>

            <v-btn
                color="#03a9f5"
                style="max-width: 100%; color: white"
                x-large
            >
                Submit
            </v-btn>
        </v-container>
    </div>
</template>

<script>
import SingleAnswer from './SingleAnswer.vue'

export default {
    components: {
        SingleAnswer,
    },
    methods: {
        selectOneAnswer(number) {
            this.currentAnswerID = number

            for (let i = 0; i < this.answers.length; i++) {
                if (this.answers[i].id === number) {
                    this.answers[i].isSelected = true
                } else {
                    this.answers[i].isSelected = false
                }
            }
        },
    },
    data() {
        return {
            answers: [
                { text: 'First Answer', isSelected: false, id: 1 },
                { text: 'Second Answer', isSelected: false, id: 2 },
                { text: 'Third Answer', isSelected: false, id: 3 },
                { text: 'Fourth Answer', isSelected: false, id: 4 },
            ],
            currentAnswerID: null,
        }
    },
}
</script>
