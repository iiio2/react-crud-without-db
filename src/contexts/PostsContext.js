import React, { Component } from 'react';
import { createContext } from 'react';

export const PostsContext = createContext();

class PostsContextProvider extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Leo integer malesuada',
        body:
          'Quis enim lobortis scelerisque fermentum dui faucibus. At lectus urna',
      },
      {
        id: 2,
        title: 'Sit amet facilisis magna',
        body: 'Tristique senectus et netus et malesuada fames ac.',
      },
    ],
  };

  handleAddPost = (id, title, body) => {
    const posts = [...this.state.posts, { id, title, body }];
    this.setState({ posts });
  };

  handleEditPost = (id, title, body, newPost) => {
    const posts = [...this.state.posts];

    const index = posts.findIndex((x) => x.id === id);

    posts[index] = { ...newPost };
    posts[index].title = title;
    posts[index].body = body;

    this.setState({ posts });
  };

  handleDeletePost = (id) => {
    const posts = this.state.posts.filter((post) => post.id !== id);

    if (window.confirm('Do you want to delete ?')) {
      this.setState({ posts });
    } else {
      return;
    }
  };

  render() {
    return (
      <PostsContext.Provider
        value={{
          ...this.state,
          handleAddPost: this.handleAddPost,
          handleEditPost: this.handleEditPost,
          handleDeletePost: this.handleDeletePost,
        }}
      >
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}

export default PostsContextProvider;
