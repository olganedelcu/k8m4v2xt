import { Comment } from '../models/CommentModel';

const STORAGE_KEY = 'comments';

const CommentService = {
  getComments(): Comment[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading comments:', error);
      return [];
    }
  },

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
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply]
        };
      }
      if (comment.replies.length > 0) {
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