import {gql} from '@apollo/client';

export const GET_USER_QUERY = /* GraphQL */ gql`
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            name
            username
            avatarUrl
            email
            bio
            website
            numberOfFollowers
            numberOfFollowing
            numberOfPosts
            posts {
                items {
                    id
                    createdAt
                    imageUrls
                    videoUrl
                    __typename
                }
                nextToken
                __typename
            }
            createdAt
            updatedAt
            __typename
        }
    }
`;
