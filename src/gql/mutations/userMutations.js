import gql from 'graphql-tag'
import { UserFragment } from '../fragments'

export const AddUserMutation = gql`
    mutation AddUserMutation($input: AddUserInput!) {
        addUser(input: $input) {
            ...UserFragment
        }
    }
    ${UserFragment}
`

export const EditUserMutation = gql`
    mutation EditUserMutation($input: EditUserInput!) {
        editUser(input: $input) {
            ...UserFragment
        }
    }
    ${UserFragment}
`

export const EditSelfMutation = gql`
    mutation EditSelfMutation($input: EditSelfInput!) {
        editSelf(input: $input) {
            ...UserFragment
        }
    }
    ${UserFragment}
`
