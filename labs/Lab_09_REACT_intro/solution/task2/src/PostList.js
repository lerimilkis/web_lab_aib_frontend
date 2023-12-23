import React, { useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Первый пользователь', text: 'Тут какой-то текст', liked: false, tags: ['#1', '#2'] },
    { id: 2, username: 'Второй пользователь', text: 'Тут тоже какой-то текст', liked: true, tags: ['#3', '#2'] },
    { id: 3, username: 'Третий пользователь', text: 'И тут', liked: false, tags: ['#1'] }
  ]);
  const [newPost, setNewPost] = useState({});

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, liked: true };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleAddPost = () => {
    const updatedPosts = [...posts, { ...newPost, id: posts.length + 1 }];
    setPosts(updatedPosts);
    setNewPost({});
  };

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleTagClick = (tag) => {
    const filteredPosts = posts.filter(post => post.tags.includes(tag));
    setPosts(filteredPosts);
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.username}</h3>
          <p>{post.text}</p>
          {!post.liked && (
            <button onClick={() => handleLike(post.id)}>Лайк</button>
          )}
          {post.liked && <p>Лайк поставлен!</p>}
          <button onClick={() => handleDelete(post.id)}>Удалить</button>
          <div>
            {post.tags.map(tag => (
              <button key={tag} onClick={() => handleTagClick(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div>
        <h3>Добавить новый пост:</h3>
        <input type="text" name="username" placeholder="Имя пользователя" onChange={handleChange} />
        <input type="text" name="text" placeholder="Текст поста" onChange={handleChange} />
        <input type="text" name="tags" placeholder="Теги" onChange={handleChange} />
        <button onClick={handleAddPost}>Добавить</button>
      </div>
    </div>
  );
};

export default PostList;