import { Comment } from '../models/CommentModel';

export class CommentService {
  private static STORAGE_KEY = 'comments';

  static getComments(): Comment[] {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading comments:', error);
      return [];
    }
  }

  static saveComments(comments: Comment[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(comments));
    } catch (error) {
      console.error('Error saving comments:', error);
    }
  }

  static addComment(comments: Comment[], text: string, parentId?: string): Comment[] {
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
  }

  private static addReply(comments: Comment[], parentId: string, newReply: Comment): Comment[] {
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
  }

  static deleteComment(comments: Comment[], commentId: string): Comment[] {
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
}