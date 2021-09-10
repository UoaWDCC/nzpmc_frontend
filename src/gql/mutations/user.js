import gql from 'graphql-tag'
import { userFragment } from '../fragments/user'

export const AddUserMutation = gql`
    mutation AddUserMutation($addUserInput: AddUserInput!) {
        addUser(input: $addUserInput) {
            ...userFragment
        }
    }
    ${userFragment}
`

export const EditUserMutation = gql`
    mutation EditUserMutation($editUserInput: EditUserInput!) {
        editUser(input: $editUserInput) {
            ...userFragment
        }
    }
    ${userFragment}
`

export const DeleteUserMutation = gql`
    mutation DeleteUserMutation($deleteUserInput: DeleteUserInput!) {
        deleteUser(input: $deleteUserInput) {
            ...userFragment
        }
    }
    ${userFragment}
`
