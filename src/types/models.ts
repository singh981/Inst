interface IComment {
    id: string;
    comment: string;
    user: {
        username: string;
    };
}

interface IUser {
    avatarUrl: string;
    username: string;
}

interface IPost {
    id: string;
    createdAt: string;
    imageUrls?: string[];
    videoUrl?: string;
    description: string;
    user: IUser;
    isLiked: boolean;
    numberOfComments: number;
    numberOfLikes: number;
    comments: IComment[];
}

export type {IPost, IUser, IComment};
