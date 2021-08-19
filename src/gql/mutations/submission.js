import gql from 'graphql-tag'
import { UserQuizFragment } from '../fragments'

export const SubmitUserQuizMutation = gql`
    mutation SubmitUserQuizMutation($input: SubmissionInput!) {
        submitUserQuizQuestions(input: $input) {
            ...UserQuizFragment
        }
    }
    ${UserQuizFragment}
`
