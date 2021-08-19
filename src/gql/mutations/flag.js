import gql from 'graphql-tag'
import { UserQuizQuestionFragment } from '../fragments'

export const UpdateFlagMutation = gql`
    mutation UpdateFlagMutation($input: EditUserQuizQuestion!) {
        editUserQuizQuestion(input: $input) {
            ...UserQuizQuestionFragment
        }
    }
    ${UserQuizQuestionFragment}
`
