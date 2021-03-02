import { useState } from 'react';

const AddPost = ({ handleAddPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addPost = (e) => {
    e.preventDefault();
    const id = Math.random() * 100000 + 1.4;
    handleAddPost(id, title, body);
    setTitle('');
    setBody('');
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <form onSubmit={addPost}>
        <input
          type='text'
          placeholder='Add Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{' '}
        <br />
        <input
          type='text'
          placeholder='Add Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddPost;
