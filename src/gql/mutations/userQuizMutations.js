import gql from 'graphql-tag'
import { UserQuizFragment, UserQuizQuestionFragment } from '../fragments'

export const AddUserQuiz = gql`
    mutation AddUserQuizMutation($input: AddUserQuizInput!) {
        addUserQuiz(input: $input) {
            ...UserQuizFragment
        }
    }
    ${UserQuizFragment}
`

export const EditUserQuiz = gql`
    mutation EditUserQuizMutation($input: EditUserQuizInput) {
        editUserQuiz(input: $input) {
            ...UserQuizFragment
        }
    }
    ${UserQuizFragment}
`

export const EditUserAnswerMutation = gql`
    mutation EditUserAnswerMutation($input: EditUserQuizQuestion!) {
        editUserQuizQuestion(input: $input) {
            ...UserQuizQuestionFragment
        }
    }
    ${UserQuizQuestionFragment}
`

export const SubmitUserQuizQuestionsMutation = gql`
    mutation SubmitUserQuizQuestionsMutation($input: SubmissionInput!) {
        submitUserQuizQuestions(input: $input) {
            ...UserQuizFragment
        }
    }
    ${UserQuizFragment}
`
