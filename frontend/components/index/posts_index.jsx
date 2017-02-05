

import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class PostsIndex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      title: "",
      text: ""
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  closeModal() {
    this.setState({
      addModal: false
    });
  }

  openAddModal() {
    this.setState({
      addModal: true
    });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleSubmit(e) {
    e.preventDefault();
    let user_id = this.props.user.id;
    let title = this.state.title;
    let body = this.state.text;
    let username = this.props.user.username;
    const newPost = {post: {user_id, title, body, username}};
    this.props.submitPost(newPost);
    this.setState({
      title: "",
      text: "",
      addModal: false
    });
  }

  render() {
    console.log(this.props);
    return (
    <div className="postsIndexWrapper">
      <div className="postIndexTop">
        <button className="createPost button"
          onClick={this.openAddModal.bind(this)}>Make a Post</button>
      </div>
      <div className="postsIndexInnerWrapper">
      {this.props.posts.map((post, i) => {
        return(
          <div key={i} className="indexPost" >
            <a href={`#/posts/${post.id}`}>
            <div className="indexPostTop">
              <div>{post.username}</div>
              <div>{(post.time)}</div>
            </div>
            <div className="indexPostBottom">
              <div>{post.title}</div>
            </div>
          </a>
        </div>
        );
      })}
      </div>

      <Modal className="addModal"
          isOpen={this.state.addModal}
          contentLabel="Modal2">
          <div className="addFormTop">
            <h1 className="addFormTitle">Create your own Post:</h1>
            <button className="closePostButton button"
              onClick={this.closeModal.bind(this)}>X</button>
          </div>

        <form className="addFormModal"
          onSubmit={this.handleSubmit.bind(this)}>
          <p className="addTitle">Title</p>
          <input className="addPost-text"
            type="text"
            placeholder="title"
            onChange={this.update("title")}
            value={this.state.title}></input>

          <p className="addDescription">Body</p>
          <textarea className="add-textarea"
            placeholder="What would you like to say?"
            onChange={this.update("text")}
            value={this.state.text}></textarea>

          <button className="post-submit button"
            type="submit">Add Post!</button>
        </form>

        </Modal>



    </div>

    );
  }
}

export default PostsIndex;
