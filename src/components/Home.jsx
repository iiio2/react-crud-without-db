import { useContext } from 'react';
import { PostsContext } from '../contexts/PostsContext';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';

const Home = () => {
  const { posts, handleAddPost, handleDeletePost } = useContext(PostsContext);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} | {post.body} <br />
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button
              onClick={() => handleDeletePost(post.id)}
              style={{
                backgroundColor: 'blue',
                padding: '.2rem .3rem',
                marginLeft: '1rem',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <AddPost handleAddPost={handleAddPost} />
    </div>
  );
};

export default Home;
