

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
    this.props.submitPost(this.props.user.id, this.state.title,
                  this.state.text, this.props.user.username);
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
      <div className="postsIndexInnerWrapper">
        <button className="createPost button"
          onClick={this.openAddModal.bind(this)}>Make a Post</button>
      {this.props.posts.reverse().map((post, i) => {
        return(
          <div key={i} className="indexPost">
            <a href={`#/posts/${post.id}`}>
              <div>{post.username}</div>
              <div>{Date(post.created_at)}</div>
              <div>{post.title}</div>
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
          <button className="closePostButton"
            onClick={this.closeModal.bind(this)}>X</button>
          </div>

        <form className="addFormModal"
          onSubmit={this.handleSubmit.bind(this)}>
          <p className="addTitle">Title</p>
          <input className="addReview-text"
            type="text"
            placeholder="title"
            onChange={this.update("title")}
            value={this.state.title}></input>

          <p className="addDescription">Body</p>
          <textarea className="add-textarea"
            placeholder="What would you like to say?"
            onChange={this.update("text")}
            value={this.state.text}></textarea>

          <button className="review-submit button"
            type="submit">Add Post!</button>
        </form>

        </Modal>



    </div>

    );
  }
}

export default PostsIndex;
