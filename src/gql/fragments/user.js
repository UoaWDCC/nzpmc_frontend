import gql from 'graphql-tag'

export const userFragment = gql`
    fragment userFragment on User {
        id
        displayName
        email
        yearLevel
        role
        created
        modified
        lastName
        firstName
        photoURL
        emailVerified
    }
`
