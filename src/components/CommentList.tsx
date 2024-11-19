import React, { useState, useEffect } from 'react';
import { CommentForm } from './CommentForm';
import { CommentItem } from './CommentItem';
import { CommentService } from '../services/commentService';
import { Comment } from '../models/CommentModel';

export function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments on mount
  useEffect(() => {
    const savedComments = CommentService.getComments();
    setComments(savedComments);
  }, []);

  const addComment = (text: string, parentId?: string) => {
    const updatedComments = CommentService.addComment(comments, text, parentId);
    setComments(updatedComments);
  };

  const deleteComment = (commentId: string) => {
    const updatedComments = CommentService.deleteComment(comments, commentId);
    setComments(updatedComments);
  };

  return (
    <div className="comments-list">
      <h2>Comments</h2>
      <CommentForm onSubmit={(text) => addComment(text)} />
      {comments.map(comment => (
        <CommentItem 
          key={comment.id}
          comment={comment}
          onDelete={deleteComment}
          onReply={addComment}
          level={0}
        />
      ))}
    </div>
  );
}