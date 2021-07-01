<template>
    <v-navigation-drawer permanent expand-on-hover app>
        <v-list
            v-for="(question, index) in questions"
            :key="question.id"
            nav
            dense
        >
            <v-list-item
                @click="selectQuestion"
                color="#00008B"
                class="px-2"
                link
            >
                <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                    <v-list-item-title
                        >Question {{ index + 1 }}</v-list-item-title
                    >
                </v-list-item-icon>
            </v-list-item>
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
            questions: null,
            selectedQuestionID: null,
        }
    },

    methods: {
        selectQuestion(id) {
            this.selectedQuestionID = id
            this.$emit('selectQuestion', this.selectedQuestionID)
        },
    },
    apollo: {
        questions: {
            query: QuestionsQuery,
            variables() {
                return {
                    quizID: this.quizID,
                }
            },
        },
        update: (data) => data.QuestionsQuery,
    },
}
</script>
<style></style>
