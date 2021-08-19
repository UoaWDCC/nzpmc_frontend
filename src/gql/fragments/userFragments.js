import gql from 'graphql-tag'

export const UserFragment = gql`
    fragment UserFragment on User {
        id
        displayName
        email
        emailVerified
        photoURL
        firstName
        lastName
        yearLevel
        role
        created
        modified
    }
`
