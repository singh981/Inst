import {gql} from '@apollo/client';

export const LIST_POSTS_QUERY = /* GraphQL */ gql`
    query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                createdAt
                imageUrls
                videoUrl
                description
                numberOfLikes
                isLiked
                userID
                user {
                    username
                    avatarUrl
                }
                comments {
                    items {
                        comment
                        createdAt
                        numberOfLikes
                        user {
                            username
                            avatarUrl
                        }
                    }
                }
            }
            nextToken
            __typename
        }
    }
`;
