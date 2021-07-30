import gql from 'graphql-tag'

export const QuestionFragment = gql`
    fragment QuestionFragment on UserQuizQuestion {
        id
        question
        imageURI
        options {
            id
            option
            created
            modified
        }
        flag
        created
        modified
    }
`
