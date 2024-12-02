import { Comment } from '../models/CommentModel';

const STORAGE_KEY = 'comments';

const CommentService = {
  // receive comments from localStorage, if no found returns empty array
  getComments(): Comment[] { 
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading comments:', error);
      return [];
    }
  },

  // save comments array to localStorage after converting it to a JSON array
  saveComments(comments: Comment[]): void { 
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch (error) {
      console.error('Error saving comments:', error);
    }
  },

  addComment(comments: Comment[], text: string, parentId?: string): Comment[] {
    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      replies: []
        };

    const updatedComments = parentId 
      ? this.addReply(comments, parentId, newComment)
      : [...comments, newComment];
    
    this.saveComments(updatedComments);
    return updatedComments;
  },

  addReply(comments: Comment[], parentId: string, newReply: Comment): Comment[] {
    return comments.map(comment => {
      if (comment.id === parentId) { // value and type check ===, is the current comment the one that receives reply?
        return {
          ...comment,
          replies: [...comment.replies, newReply]
        };
      }
      if (comment.replies.length > 0) { // do we already have any reply?
        return {
          ...comment,
          replies: this.addReply(comment.replies, parentId, newReply)
        };
      }
      return comment;
    });
  },

  deleteComment(comments: Comment[], commentId: string): Comment[] {
    const updatedComments = comments.filter(comment => {
      if (comment.id === commentId) {
        return false;
      }
      // if comment has any reply, recursion is needed to delete the replies
      if (comment.replies.length > 0) {
        comment.replies = this.deleteComment(comment.replies, commentId);
      }
      return true;
    });

    this.saveComments(updatedComments);
    return updatedComments;
  }
};

export default CommentService;