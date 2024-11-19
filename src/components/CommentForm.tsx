import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (text: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
      />
      <button type="submit">Submit</button>
    </form>
  );
}