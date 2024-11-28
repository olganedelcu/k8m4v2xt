import React, { useState } from 'react';
import { CommentForm } from './CommentForm';
import { Comment } from '../models/CommentModel';

interface CommentItemProps {
  comment: Comment;
  onDelete: (id: string) => void;
  onReply: (text: string, parentId: string) => void;
  level: number; // nesting level of comments
}

export function CommentItem({ comment, onDelete, onReply, level }: CommentItemProps) {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className="comment-thread">
      <div 
        className="comment-item"
        style={{ marginLeft: `${level * 20}px` }}
      >
        <div className="comment-content">
          <button 
            className="delete-button"
            onClick={() => onDelete(comment.id)}
          >
            ×
          </button>
          <p>{comment.text}</p>
          <button 
            className="reply-button"
            onClick={() => setIsReplying(!isReplying)}
          >
            {isReplying ? 'Cancel' : 'Reply'}
          </button>
        </div>

        {isReplying && (
          <div className="reply-form">
            <CommentForm 
              onSubmit={(text) => {
                onReply(text, comment.id);
                setIsReplying(false);
              }}
            />
          </div>
        )}
      </div>

      {comment.replies?.map(reply => (
        <CommentItem
          key={reply.id}
          comment={reply}
          onDelete={onDelete}
          onReply={onReply}
          level={level + 1}
        />
      ))}
    </div>
  );
}