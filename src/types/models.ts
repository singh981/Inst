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

export interface IProfileUser {
    name: string;
    username: string;
    website?: string;
    bio: string;
    avatarUrl: string;
    numberOfFollowers: number;
    numberOfFollowing: number;
    posts: any[];
}
