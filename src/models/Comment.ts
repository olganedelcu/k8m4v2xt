export interface Comment {
    id: string; // identifier for comment
    text: string; // body of comment
    parentId: string | null; // identify if comment is a reply to another comment
    replies: Comment[]; // nested comments
  }
  
