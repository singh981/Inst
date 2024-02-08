export interface IComment {
    id: string;
    comment: string;
    createdAt?: string;
    numberOfLikes?: number;
    user: {
        id?: string;
        avatarUrl?: string;
        username: string;
    };
}

export type IProfileUserPost =
    | IProfileUserPostSingleImage
    | IProfileUserPostMultipleImages;

export interface IProfileUserPostSingleImage {
    id: string;
    imageUrl: string;
    createdAt: string;
    description: string;
}

export interface IProfileUserPostMultipleImages {
    id: string;
    imageUrls: string[];
    createdAt: string;
    description: string;
}

export interface IProfileUser {
    name: string;
    username: string;
    bio: string;
    avatarUrl: string;
    numberOfFollowers: number;
    numberOfFollowing: number;
    posts: IProfileUserPost[];
}

export interface IPost {
    id: string;
    createdAt: string;
    imageUrls?: string[];
    videoUrl?: string;
    description: string;
    user: IProfileUser;
    isLiked: boolean;
    numberOfComments: number;
    numberOfLikes: number;
    comments: IComment[];
}
