import gql from 'graphql-tag'

export const QuizFragment = gql`
    fragment QuizFragment on Quiz {
        id
        name
        description
        duration
        numOfQuestions
        startTime
        endTime
        created
        modified
    }
`
