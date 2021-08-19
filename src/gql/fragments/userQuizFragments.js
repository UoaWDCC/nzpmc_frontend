import gql from 'graphql-tag'

export const UserQuizFragment = gql`
    fragment UserQuizFragment on UserQuiz {
        id
        name
        description
        duration
        score
        startTime
        endTime
        created
        modified
    }
`

export const UserQuizQuestionFragment = gql`
    fragment UserQuizQuestionFragment on UserQuizQuestion {
        id
        question
        imageURI
        flag
        firstViewed
        lastAnswered
        created
        modified
    }
`

export const UserQuizQuestionWithoutFlagFragment = gql`
    fragment UserQuizQuestionWithoutFlagFragment on UserQuizQuestion {
        id
        question
        imageURI
        firstViewed
        lastAnswered
        created
        modified
    }
`
