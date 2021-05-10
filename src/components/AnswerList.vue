<template>
    <div align="center">
        <v-container style="background-color: #ecf0f1; max-width: 400px">
            <div
                style="padding-bottom: 20px"
                v-for="answer in answers"
                :key="answer"
            >
                <SingleAnswer :ans="answer.text" />
            </div>

            <v-btn
                color="#385F73"
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
    data() {
        return {
            answers: [
                { text: 'First Answer' },
                { text: 'Second Answer' },
                { text: 'Third Answer' },
                { text: 'Fourth Answer' },
            ],
        }
    },
}
</script>
