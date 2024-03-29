/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getLike = /* GraphQL */ `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    user {
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
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userID
    post {
      id
      createdAt
      imageUrls
      videoUrl
      description
      numberOfLikes
      isLiked
      userID
      user {
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
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    postID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
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
        createdAt
        updatedAt
        __typename
      }
      userID
      post {
        id
        createdAt
        imageUrls
        videoUrl
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      postID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const likesByUserID = /* GraphQL */ `query LikesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user {
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
        createdAt
        updatedAt
        __typename
      }
      userID
      post {
        id
        createdAt
        imageUrls
        videoUrl
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      postID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByUserIDQueryVariables,
  APITypes.LikesByUserIDQuery
>;
export const likesByPostID = /* GraphQL */ `query LikesByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user {
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
        createdAt
        updatedAt
        __typename
      }
      userID
      post {
        id
        createdAt
        imageUrls
        videoUrl
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      postID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByPostIDQueryVariables,
  APITypes.LikesByPostIDQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    createdAt
    comment
    user {
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
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    userID
    post {
      id
      createdAt
      imageUrls
      videoUrl
      description
      numberOfLikes
      isLiked
      userID
      user {
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
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    postID
    numberOfLikes
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      comment
      user {
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
        createdAt
        updatedAt
        __typename
      }
      userID
      post {
        id
        createdAt
        imageUrls
        videoUrl
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      postID
      numberOfLikes
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const commentsByUserID = /* GraphQL */ `query CommentsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      comment
      user {
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
        createdAt
        updatedAt
        __typename
      }
      userID
      post {
        id
        createdAt
        imageUrls
        videoUrl
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      postID
      numberOfLikes
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByUserIDQueryVariables,
  APITypes.CommentsByUserIDQuery
>;
export const commentsByPostID = /* GraphQL */ `query CommentsByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      comment
      user {
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
        createdAt
        updatedAt
        __typename
      }
      userID
      post {
        id
        createdAt
        imageUrls
        videoUrl
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      postID
      numberOfLikes
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIDQueryVariables,
  APITypes.CommentsByPostIDQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    createdAt
    imageUrls
    videoUrl
    description
    numberOfLikes
    isLiked
    userID
    user {
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
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    comments {
      items {
        id
        createdAt
        comment
        userID
        postID
        numberOfLikes
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
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
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const postsByUserID = /* GraphQL */ `query PostsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByUserIDQueryVariables,
  APITypes.PostsByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
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
        description
        numberOfLikes
        isLiked
        userID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    comments {
      items {
        id
        createdAt
        comment
        userID
        postID
        numberOfLikes
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    likes {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
