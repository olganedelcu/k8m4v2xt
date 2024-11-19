import React from 'react';
import { CommentList } from './components/CommentList';
import './styles/Comments.css';

export default function App() {
  return (
    <div className="App">
      <main>
        <CommentList />
      </main>
    </div>
  );
}