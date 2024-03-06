/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  user: User,
  userID: string,
  post: Post,
  postID: string,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  username: string,
  avatarUrl?: string | null,
  email: string,
  bio: string,
  website?: string | null,
  numberOfFollowers: number,
  numberOfFollowing: number,
  numberOfPosts: number,
  UserPosts?: ModelPostConnection | null,
  UserComments?: ModelCommentConnection | null,
  UserLikes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  createdAt: string,
  imageUrls?: Array< string > | null,
  videoUrl?: string | null,
  description: string,
  userID: string,
  user: User,
  PostComments?: ModelCommentConnection | null,
  PostLikes?: ModelLikeConnection | null,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  createdAt: string,
  comment: string,
  user: User,
  userID: string,
  post: Post,
  postID: string,
  numberOfLikes: number,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  createdAt?: string | null,
  comment: string,
  userID: string,
  postID: string,
  numberOfLikes: number,
};

export type ModelCommentConditionInput = {
  createdAt?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  numberOfLikes?: ModelIntInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCommentInput = {
  id: string,
  createdAt?: string | null,
  comment?: string | null,
  userID?: string | null,
  postID?: string | null,
  numberOfLikes?: number | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  createdAt?: string | null,
  imageUrls?: Array< string > | null,
  videoUrl?: string | null,
  description: string,
  userID: string,
};

export type ModelPostConditionInput = {
  createdAt?: ModelStringInput | null,
  imageUrls?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  createdAt?: string | null,
  imageUrls?: Array< string > | null,
  videoUrl?: string | null,
  description?: string | null,
  userID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  username: string,
  avatarUrl?: string | null,
  email: string,
  bio: string,
  website?: string | null,
  numberOfFollowers: number,
  numberOfFollowing: number,
  numberOfPosts: number,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  numberOfFollowers?: ModelIntInput | null,
  numberOfFollowing?: ModelIntInput | null,
  numberOfPosts?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  username?: string | null,
  avatarUrl?: string | null,
  email?: string | null,
  bio?: string | null,
  website?: string | null,
  numberOfFollowers?: number | null,
  numberOfFollowing?: number | null,
  numberOfPosts?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  numberOfLikes?: ModelIntInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  imageUrls?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  numberOfFollowers?: ModelIntInput | null,
  numberOfFollowing?: ModelIntInput | null,
  numberOfPosts?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  numberOfLikes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  imageUrls?: ModelSubscriptionStringInput | null,
  videoUrl?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  avatarUrl?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  numberOfFollowers?: ModelSubscriptionIntInput | null,
  numberOfFollowing?: ModelSubscriptionIntInput | null,
  numberOfPosts?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByUserIDQuery = {
  likesByUserID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByPostIDQuery = {
  likesByPostID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
      comment: string,
      userID: string,
      postID: string,
      numberOfLikes: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIDQuery = {
  commentsByUserID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
      comment: string,
      userID: string,
      postID: string,
      numberOfLikes: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIDQuery = {
  commentsByPostID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
      comment: string,
      userID: string,
      postID: string,
      numberOfLikes: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIDQuery = {
  postsByUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    comment: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    userID: string,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      imageUrls?: Array< string > | null,
      videoUrl?: string | null,
      description: string,
      userID: string,
      updatedAt: string,
    },
    postID: string,
    numberOfLikes: number,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    imageUrls?: Array< string > | null,
    videoUrl?: string | null,
    description: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      username: string,
      avatarUrl?: string | null,
      email: string,
      bio: string,
      website?: string | null,
      numberOfFollowers: number,
      numberOfFollowing: number,
      numberOfPosts: number,
      createdAt: string,
      updatedAt: string,
    },
    PostComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    username: string,
    avatarUrl?: string | null,
    email: string,
    bio: string,
    website?: string | null,
    numberOfFollowers: number,
    numberOfFollowing: number,
    numberOfPosts: number,
    UserPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    UserComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    UserLikes?:  {
      __typename: "ModelLikeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
