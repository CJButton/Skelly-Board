

import React from 'react';

import Modal from 'react-modal';
import values from 'lodash/values';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editModal: false,
      deleteModal: false,
      addModal: false,
      errorModal: false,
      title: "",
      text: "",
      allComments: values(this.props.allComments),
      userComments: this.props.userComments
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      allComments: values(nextProps.allComments),
      userComments: nextProps.userComments
    });
  }

  // gives the modal something to attach to
  componentWillMount() {
    Modal.setAppElement('body');
 }

  // collect all the data here before sending it off to be added to db
  handleSubmit(e) {
    e.preventDefault();
    let user_id = (this.props.user !== null) ? this.props.user.id : null;
    let body = this.state.text;
    let username = this.props.user.username;
    let post_id = this.props.post.id;
    const newComment = {comment: {post_id, user_id, body, username}};
    this.props.submitComment(newComment);
    this.setState({
      title: "",
      text: "",
      addModal: false
    });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  addCommentModal() {
    (this.props.user === null) ? this.errorModal() :
    this.setState({
      addModal: true
    });
  }

  errorModal() {
    this.setState({
      errorModal: true
    });
  }

  deleteComment() {
    this.props.deleteComment(this.state.userReview.id);
    this.setState({
      deleteModal: false,
      title: "",
      text: ""
    });
  }

  deleteCommentModal() {
    this.setState({
      deleteModal: true
    });
  }

  closeModal() {
    this.setState({
      editModal: false,
      deleteModal: false,
      addModal: false,
      errorModal: false,
      title: "",
      text: ""
    });
  }

  render() {
    return(
      <div className="commentsWrapper">
        <div className="commentsTop">
          <button className="addCommentButton button"
            onClick={this.addCommentModal.bind(this)}>
            Add a Comment!</button>
        </div>
        <p className="commentsDivider">Comments</p>

                {this.props.comments.map((comment, idx) => {
                  return (
                    <div key={idx} className="indivComments">
                      {comment.username}
                      <br></br>
                      <br></br>
                      <div className="commentDescri">
                        {comment.body.split("\n").map((com, idx2) => {
                          return(
                            <span key={idx2}>{com}<br/></span>
                          );
                        })}

                      </div>

                    </div>
                  );

                })}

              <Modal className="errorModal"
                    isOpen={this.state.errorModal}
                    contentLabel="Modal4">
                    <div className="addCommentFormTop">
                      <button className="closeAddCommentButton button"
                        onClick={this.closeModal.bind(this)}>X</button>
                      <h3 className="errorTitle">
                        You must be logged in to leave a comment.
                      </h3>
                    </div>

                  </Modal>


            <Modal className="addModal"
                  isOpen={this.state.addModal}
                  contentLabel="Modal3">
                  <div className="addFormTop">
                    <h1 className="addFormTitle">Add a Comment:</h1>
                    <button className="closeModalButton button"
                      onClick={this.closeModal.bind(this)}>X</button>
                  </div>

                  <form className="addFormModal"
                    onSubmit={this.handleSubmit.bind(this)}>

                    <p className="addDescription">Body</p>
                    <textarea className="addComment-textarea"
                      onChange={this.update("text")}
                      value={this.state.text}></textarea>

                    <button className="user-submit button"
                      type="submit">Submit!</button>
                  </form>

                </Modal>
      </div>
    );
  }
}

export default Comments;
