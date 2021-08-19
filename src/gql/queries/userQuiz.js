import gql from 'graphql-tag'
import {
    UserQuizFragment,
    OptionFragment,
    UserQuizQuestionFragment,
} from '../fragments'

export const UserQuizzesQuery = gql`
    query UserQuizzesQuery {
        userQuizzes {
            ...UserQuizFragment
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
