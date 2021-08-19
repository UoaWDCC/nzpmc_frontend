import gql from 'graphql-tag'

export const QuestionFragment = gql`
    fragment QuestionFragment on Question {
        id
        question
        imageURI
        numOfAnswers
        topics
        created
        modified
    }
`

export const OptionFragment = gql`
    fragment OptionFragment on Option {
        id
        option
        created
        modified
    }
`
