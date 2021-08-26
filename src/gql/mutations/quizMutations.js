import gql from 'graphql-tag'
import { QuizFragment, QuestionFragment, OptionFragment } from '../fragments'

export const AddQuizMutation = gql`
    mutation AddQuizMutation($input: AddQuizInput!) {
        addQuiz(input: $input) {
            ...QuizFragment
        }
    }
    ${QuizFragment}
`

export const EditQuizMutation = gql`
    mutation EditQuizMutation($input: EditQuizInput!) {
        editQuiz(input: $input) {
            ...QuizFragment
        }
    }
    ${QuizFragment}
`

export const AddQuestionMutation = gql`
    mutation AddQuestionMutation($input: AddQuestionInput!) {
        editQuiz(input: $input) {
            ...QuestionFragment
        }
    }
    ${QuestionFragment}
`

export const EditQuestionMutation = gql`
    mutation EditQuestionMutation($input: EditQuestionInput!) {
        editQuiz(input: $input) {
            ...QuestionFragment
        }
    }
    ${QuestionFragment}
`

export const AddOptionMutation = gql`
    mutation AddOptionMutation($input: AddOptionInput!) {
        addOption(input: $input) {
            ...OptionFragment
        }
    }
    ${OptionFragment}
`

export const EditOptionMutation = gql`
    mutation EditOptionMutation($input: EditOptionInput!) {
        editOption(input: $input) {
            ...OptionFragment
        }
    }
    ${OptionFragment}
`
