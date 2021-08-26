import gql from 'graphql-tag'
import {
    UserQuizFragment,
    OptionFragment,
    UserQuizQuestionFragment,
    UserQuizQuestionWithoutFlagFragment,
} from '../fragments'

export const UserQuizzesQuery = gql`
    query UserQuizzesQuery {
        userQuizzes {
            ...UserQuizFragment
        }
    }
    ${UserQuizFragment}
`

export const UserQuizQuery = gql`
    query UserQuizQuery($quizID: ID!) {
        userQuiz(quizID: $quizID) {
            ...UserQuizFragment
        }
    }
    ${UserQuizFragment}
`

export const UserQuizQuestionsOptionQuery = gql`
    query UserQuizQuestionsOptionQuery($quizID: ID!) {
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

export const UserQuizQuestionOptionQuery = gql`
    query UserQuizQuestionOptionQuery($quizID: ID!, $questionID: ID!) {
        userQuiz(quizID: $quizID) {
            question(id: $questionID) {
                ...UserQuizQuestionWithoutFlagFragment
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
    ${UserQuizQuestionWithoutFlagFragment}
`

export const UserQuizQuestionsWithoutFlagFragmentQuery = gql`
    query UserQuizQuestionsWithoutFlagFragmentQuery(
        $quizID: ID!
        $questionID: ID!
    ) {
        userQuiz(quizID: $quizID) {
            question(id: $questionID) {
                ...UserQuizQuestionWithoutFlagFragment
            }
        }
    }
    ${UserQuizQuestionWithoutFlagFragment}
`
