

import React from 'react';

import {hashHistory} from 'react-router';
import Modal from 'react-modal';

import Comments from '../comments/comments_container';


class Post extends React.Component{
constructor(props) {
  super(props);

    this.state = {
      deleteModal: false
    };

  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
    this.setState({
      deleteModal: false
    });
  }

  deletePostModal() {
    this.setState({
      deleteModal: true
    });
  }

  closeModal() {
    this.setState({
      deleteModal: false
    });
  }

  render() {
    console.log(this.props);
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
            <button className="deletePost button"
              onClick={this.deletePostModal.bind(this)}>Delete</button> : null}
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

        <Comments/>


      </div>
    );
  }

}

export default Post;
