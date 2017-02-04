

import React from 'react';
import { Link } from 'react-router';
// import Modal from 'react-modal';

class PostsIndex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
    };
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


  render() {
    console.log(this.props);
    console.log(this.state);
    return (
    <div className="postsIndexWrapper">
      <div className="postsIndexInnerWrapper">
        <button className="createPost button">Make a Post</button>
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
          <div className="formTop">
            <div className="formTopLeft">
              {this.state.userReview === undefined ? null :
                <p className="addUsername">
                  {this.state.userReview.username}</p>}
              <div className="addFormTop">
                <StarRatingComponent
                  className="starRating"
                  name="rater"
                  starCount={5}
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}/>
              </div>
              <p className="addComicTitle">
                {this.props.manga === undefined ? null : this.props.manga.title}</p>
            </div>
          </div>

        <form className="editFormModal"
          onSubmit={this.handleSubmit.bind(this)}>
          <p className="editTitle">Title</p>
          <input className="editReview-text"
            type="text"
            onChange={this.handleTitle}
            value={this.state.title}></input>

          <p className="editDescription">Description</p>
          <textarea className="editReview-textarea"
            onChange={this.handleText}
            value={this.state.text}></textarea>

          <button className="review-submit button"
            type="submit">Submit!</button>
        </form>

        </Modal>



    </div>

    );
  }
}

export default PostsIndex;
