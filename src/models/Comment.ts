export interface Comment {
    id: string;
    text: string;
    parentId: string | null;
    createdAt: Date;
    replies: Comment[];
  }
  
export type NewComment = Omit<Comment, 'id' | 'createdAt' | 'replies'>;