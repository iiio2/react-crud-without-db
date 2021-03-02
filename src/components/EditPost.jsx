import { useState, useContext, useEffect } from 'react';
import { PostsContext } from '../contexts/PostsContext';

const EditPost = (props) => {
  const { posts, handleEditPost } = useContext(PostsContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const tanchi = Number(props.match.params.id);

  const post = posts.filter((p) => p.id === tanchi);

  const newPost = Object.assign({}, ...post);

  const editPost = (e) => {
    e.preventDefault();

    const id = tanchi;
    handleEditPost(id, title, body, newPost);
    setTitle('');
    setBody('');
    props.history.push('/');
  };
  useEffect(() => {
    setTitle(newPost.title);
    setBody(newPost.body);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ marginTop: '3rem' }}>
      <form onSubmit={editPost}>
        <input
          type='text'
          placeholder='Edit Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{' '}
        <br />
        <input
          type='text'
          placeholder='Edit Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditPost;
