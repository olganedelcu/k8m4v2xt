export interface Comment {
  id: string;
  text: string;
  parentId?: string | null; // Indicates if comment is a reply to another comment
  replies: Comment[]; // nested comments associated with this comment for replies
}

