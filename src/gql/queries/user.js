import gql from 'graphql-tag'
import { userFragment } from '../fragments/user'

export const usersQuery = gql`
    query usersQuery {
        users {
            ...userFragment
        }
    }
    ${userFragment}
`
