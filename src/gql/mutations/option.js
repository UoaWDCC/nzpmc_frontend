import gql from 'graphql-tag'
import { UserQuizQuestionFragment } from '../fragments'

export const UpdateUserAnswerMutation = gql`
    mutation UpdateUserAnswerMutation($input: EditUserQuizQuestion!) {
        editUserQuizQuestion(input: $input) {
            ...UserQuizQuestionFragment
        }
    }
    ${UserQuizQuestionFragment}
`
