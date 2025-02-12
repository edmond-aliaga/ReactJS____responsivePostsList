import React, { useState } from 'react';
import './App.css';
import FormPosts from './components/FormPosts';
import PostsList from './components/PostsList';

function App() {

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [isEditButtonActive, setIsEditButtonActive] = useState(false);

  return (
    <div className='container'>
      <div className='main-window'>
        <div>
          <p className='header'>Posts list</p>
        </div>

        <div>
          <FormPosts 
              input={input}
              setInput={setInput}
              posts={posts}
              setPosts={setPosts}
              editPost={editPost}
              setEditPost={setEditPost}
              isEditButtonActive={isEditButtonActive}
              setIsEditButtonActive={setIsEditButtonActive}
          />
        </div>

        <div>
          <PostsList 
              posts={posts} 
              setPosts={setPosts}
              editPost={editPost}
              setEditPost={setEditPost}
              isEditButtonActive={isEditButtonActive}
              setIsEditButtonActive={setIsEditButtonActive} 
          />
        </div>

      </div>
    </div>
  );
}

export default App;