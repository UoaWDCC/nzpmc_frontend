import gql from 'graphql-tag'
import { QuestionFragment } from '../fragments/question'

export const UpdateUserAnswerMutation = gql`
    mutation UpdateUserAnswerMutation($input: EditUserQuizQuestion!) {
        editUserQuizQuestion(input: $input) {
            ...QuestionFragment
        }
    }
    ${QuestionFragment}
`
