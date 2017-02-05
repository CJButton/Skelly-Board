

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

  // editCommentModal() {
  //   this.setState({
  //     editModal: true
  //   });
  // }

  // handleEdit(reviewId){
  //   this.props.editReview(this.state.userReview.id, this.state.userRating, this.state.title, this.state.text);
  //   this.setState({
  //     editModal: false
  //   });
  // }

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
                    <div className="addFormTop">
                      <button className="closeEditButton"
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
                    <button className="closeEditButton"
                      onClick={this.closeModal.bind(this)}>X</button>
                  </div>

                  <form className="addFormModal"
                    onSubmit={this.handleSubmit.bind(this)}>

                    <p className="addDescription">Body</p>
                    <textarea className="addComment-textarea"
                      onChange={this.update("text")}
                      value={this.state.text}></textarea>

                    <button className="comment-submit button"
                      type="submit">Submit!</button>
                  </form>

                </Modal>
      </div>
    );
  }
}

export default Comments;
// <div className="addCommentButtonContainer">
//   {this.props.user !== undefined ? null :
//     <button className="addCommentButton button"
//       onClick={this.addCommentModal.bind(this)}>
//       Add a Comment!</button>}
//     </div>
//
//
//     <Modal className="addModal"
//       isOpen={this.state.addModal}
//       contentLabel="Modal3">
//       <div className="addFormTop">
//         <h1 className="addFormTitle">Add a Comment:</h1>
//         <button className="closeEditButton"
//           onClick={this.closeModal.bind(this)}>X</button>
//       </div>
//
//       <form className="addFormModal"
//         onSubmit={this.handleSubmit.bind(this)}>
//         <p className="addTitle">Title</p>
//         <input className="addComment-text"
//           type="text"
//           onChange={this.update("title")}
//           value={this.state.title}></input>
//
//         <p className="addDescription">Body</p>
//         <textarea className="addComment-textarea"
//           onChange={this.update("text")}
//           value={this.state.text}></textarea>
//
//         <button className="comment-submit button"
//           type="submit">Submit!</button>
//       </form>
//
//     </Modal>
//
//     {this.state.allComments.length === 0 ? null :
//       this.state.allComments.map((comment, idx) => {
//         return(
//           <div className="comment basicOutline" key={idx}>
//
//             <div className="userComTitle">
//               <div className="userComtitle-top">
//                 {comment.username}
//               </div>
//               <div className="userComTitle-bottom">
//
//                 <div className="userComTitle-title">{comment.title}</div>
//                 <div className={comment.user_id === this.props.user.id
//                     ? "deleteEdit" : "hide"}>
//
//                     <div className="userComment-top">
//                       <div className="userComment-buttons">
//                         <button className="editButton button comButton"
//                           onClick={this.editCommentModal.bind(this)}>
//                           Edit</button>
//                         <button className="deleteButton button comButton"
//                           onClick={this.deleteCommentModal.bind(this)}>
//                           Delete</button>
//                       </div>
//                     </div>
//
//                   </div>
//                 </div>
//               </div>
//               <div className="userRevDescrip">
//                 {comment.body.split("\n").map((rev, idx2) => {
//                   return(
//                     <span key={idx2}>{rev}<br/></span>
//                   );
//                 })}
//
//               </div>
//
//             </div>
//           );
//         }) }

// <div className="deleteModalContainer">
//   <Modal className="deleteModal"
//     isOpen={this.state.deleteModal}
//     contentLabel="Modal">
//     <div>Sure you want to delete your review?</div>
//     <div className="deleteEditClose">
//       <button className="deleteButton button"
//         onClick={this.deleteComment.bind(this)}>
//         Yes, delete it!</button>
//       <button className="cancelDelete button"
//         onClick={this.closeModal.bind(this)}>No! Leave as is!</button>
//     </div>
//   </Modal>
// </div>

// <Modal className="editModal"
//   isOpen={this.state.editModal}
//   contentLabel="Modal2">
//   <div className="editFormTop">
//   <h1 className="editFormTitle">Edit your Review:</h1>
//   <button className="closeEditButton"
//     onClick={this.closeModal.bind(this)}>X</button>
//   </div>
//   <div className="formTop">
//     <div className="formTopLeft">
//       <p className="editUsername">{this.props.user.username}</p>
//       <div className="editFormTop">
//         <StarRatingComponent
//           className="starRating"
//           name="rater"
//           starCount={5}
//           value={this.state.userRating}
//           onStarClick={this.onStarClickUser.bind(this)}/>
//       </div>
//       <p className="editComicTitle">
//         {this.props.manga.title}</p>
//     </div>
//   </div>
//
// <form className="editFormModal"
//   onSubmit={this.handleEdit.bind(this)}>
//   <p className="editTitle">Title</p>
//   <input className="editReview-text"
//     type="text"
//     onChange={this.handleTitle}
//     value={this.state.title}></input>
//
//   <p className="editDescription">Description</p>
//   <textarea className="editReview-textarea"
//     onChange={this.handleText}
//     value={this.state.text}></textarea>
//
//   <button className="review-submit button"
//     type="submit">Submit!</button>
// </form>
//
// </Modal>
