import gql from 'graphql-tag'
import { OptionFragment } from '../fragments/option'
import {
    UserQuizQuestionFragment,
    UserQuizQuestionWithoutFlagFragment,
} from '../fragments/question'

export const QuestionsQuery = gql`
    query QuestionsQuery($quizID: ID!) {
        userQuiz(quizID: $quizID) {
            questions {
                ...UserQuizQuestionFragment
                options {
                    ...OptionFragment
                }
                userAnswer {
                    ...OptionFragment
                }
            }
        }
    }
    ${OptionFragment}
    ${UserQuizQuestionFragment}
`

export const QuestionQuery = gql`
    query QuestionQuery($quizID: ID!, $questionID: ID!) {
        userQuiz(quizID: $quizID) {
            question(id: $questionID) {
                ...UserQuizQuestionWithoutFlagFragment
            }
        }
    }
    ${UserQuizQuestionWithoutFlagFragment}
`
