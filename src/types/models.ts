export interface IComment {
    id: number;
    comment: string;
    createdAt?: string;
    numberOfLikes?: number;
    user: {
        id?: number;
        avatarUrl?: string;
        username: string;
    };
}
export interface IFeedPost {
    id: number;
    createdAt: string;
    imageUrls?: string[];
    videoUrl?: string;
    description: string;
    user: {
        avatarUrl: string;
        username: string;
    };
    isLiked: boolean;
    numberOfLikes: number;
    comments: IComment[];
}

// Profile

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
    website?: string;
    bio: string;
    avatarUrl: string;
    numberOfFollowers: number;
    numberOfFollowing: number;
    posts: IProfileUserPost[];
}
