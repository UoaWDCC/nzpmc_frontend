import gql from 'graphql-tag'
import { OptionFragment } from '../fragments'

export const OptionsQuery = gql`
    query OptionsQuery($quizID: ID!, $questionID: ID!) {
        userQuiz(quizID: $quizID) {
            question(id: $questionID) {
                id
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
`
