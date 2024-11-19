export interface Comment {
    id: string;
    text: string;
    replies: Comment[];
}

export interface CommentResponse {
    comments: Comment[];
    error?: string;
}