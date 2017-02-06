

import React from 'react';

import {hashHistory} from 'react-router';
import Modal from 'react-modal';

import Comments from '../comments/comments_container';

class Post extends React.Component{
constructor(props) {
  super(props);

    this.state = {
      deleteModal: false,
      editModal: false,
      body: "",
      title: ""
    };

  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
    this.setState({
      deleteModal: false
    });
  }

  editPost() {
    let id = this.props.post.id;
    let user_id = this.props.user.id;
    let title = this.state.title;
    let body = this.state.body;
    let username = this.props.user.username;
    let post = {id, user_id, title, body, username};
    this.props.editPost(post);
    this.closeModal();
  }

  deletePostModal() {
    this.setState({
      deleteModal: true
    });
  }

  editPostModal() {
    this.setState({
      editModal: true
    });
  }

  closeModal() {
    this.setState({
      deleteModal: false,
      editModal: false,
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <div className="postComponentWrapper">
        <div className="postWrapper">
          {this.props.post.username}
          <br></br>
          {this.props.post.title}
          <br></br>
          <br></br>
          {this.props.post.body}
          {this.props.user !== null && this.props.user.id === this.props.post.user_id ?
            <div>
            <button className="deletePost button"
              onClick={this.deletePostModal.bind(this)}>Delete</button>
            <button className="editPost button"
              onClick={this.editPostModal.bind(this)}>Edit</button>
            </div>: null}
        </div>

        <div className="deleteModalContainer">
          <Modal className="deleteModal"
            isOpen={this.state.deleteModal}
            contentLabel="Modal">
            <div>Sure you want to delete your post?</div>
            <div className="deleteEditClose">
              <button className="deleteButton button"
                onClick={this.deletePost.bind(this)}>
                Yes, delete it!</button>
              <button className="cancelDelete button"
                onClick={this.closeModal.bind(this)}>No! Leave as is!</button>
            </div>
          </Modal>
        </div>

        <div className="editModalContainer">
          <Modal className="editModal"
            isOpen={this.state.editModal}
            contentLabel="Modal4">
            <div className="editFormTop">
              <h1 className="editFormTitle">Edit your Post:</h1>
              <button className="closePostButton button"
                onClick={this.closeModal.bind(this)}>X</button>
            </div>

            <form className="editFormModal"
              onSubmit={this.editPost.bind(this)}>
              <p className="editTitle">Title</p>
              <input className="editPost-text"
                type="text"
                placeholder="title"
                onChange={this.update("title")}
                value={this.state.title}></input>

              <p className="editDescription">Body</p>
              <textarea className="edit-textarea"
                placeholder="What would you like to say?"
                onChange={this.update("body")}
                value={this.state.text}></textarea>

              <button className="post-submit button"
                type="submit">Edit Post!</button>
            </form>
          </Modal>
        </div>

        <Comments/>


      </div>
    );
  }

}

export default Post;
