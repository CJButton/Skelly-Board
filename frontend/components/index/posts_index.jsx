

import React from 'react';
import { Link } from 'react-router';
// import Modal from 'react-modal';

class PostsIndex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      // username: "",
      // password1: "",
      // password2: "",
      // email: "",
      // createUser: false,
      // newUser: false,
      // loginUser: false,
      // warning: "warningHide"
    };

    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleSignup = this.handleSignup.bind(this);
    // this.handleGuest = this.handleGuest.bind(this);
  }

  // update(property) {
  //   return e => this.setState({[property]: e.target.value});
  // }

  // handleGuest(e) {
  //   e.preventDefault();
  //   const username = "Guest";
  //   const password = "password";
  //   const user = {user: {username, password}};
  //   this.props.login(user);
  // }

  // handleLogin(e) {
  //   e.preventDefault();
  //   const username = this.state.username;
  //   const password = this.state.password1;
  //   const user = {user: {username, password}};
  //   this.props.login(user);
  //   this.closeModal();
  //   // this.props.router.push("/");
  // }

	// redirectIfLoggedIn() {
	// 	if (this.props.loggedIn) {
	// 		this.props.router.push("/");
	// 	}
	// }

  // renderErrors() {
  //   if (this.props.errors !== []){
  //     return(
  //       <div className="errorsContainer">
  //         <ul>
  //           {this.props.errors.map((error, idx) => (
  //             <li key={idx} className="errorMessage">
  //               {error}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //   );
  //  }
  // }

  // createUserModal() {
  //   this.setState({
  //     createUser: true
  //   });
  // }
  //
  // loginUserModal() {
  //   this.setState({
  //     loginUser: true
  //   });
  // }
  //
  // closeModal() {
  //   this.setState({
  //     createUser: false,
  //     loginUser: false,
  //     newUser: false
  //   });
  // }

  // handleSignup(e) {
  //   e.preventDefault();
  //   const username = this.state.username;
  //   const email = this.state.email;
  //   const password = this.state.password1;
  //   const newUser = {user: {username, password, email}};
  //   this.state.password1 !== this.state.password2 ?
  //   this.passwordMismatch() : this.props.signup(newUser);
  //   this.closeModal();
  // }
  //
  // passwordMismatch() {
  //   return (
  //     this.setState({
  //       warning: "warningShow"
  //     })
  //   );
  // }
  //
  // componentWillMount() {
  // Modal.setAppElement('body');
  // }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
    <div className="postsIndexWrapper">
    </div>
    //   <p>Welcome to the barebones Skelly Board!</p>
    //   {this.props.currentUser === null ?<div className="loggedInDiv">
    //      <button className="createUserButton"
    //           onClick={this.createUserModal.bind(this)}>Create User</button>
    //
    //       <button className="loginUserButton"
    //             onClick={this.loginUserModal.bind(this)}>Login!</button></div>:
    //           null}
    //
    //   {this.props.currentUser !== null ?
    //     <button className="logoutUserButton"
    //       onClick={this.props.logout.bind(this)}>Logout!</button>: null}
    //
    //     <Modal className="createUser"
    //         isOpen={this.state.createUser}
    //         contentLabel="Modal2">
    //         <h1 className="editFormTitle">Sign Up!</h1>
    //
    //         <button className="closeModalButton"
    //           onClick={this.closeModal.bind(this)}>X</button>
    //
    //       <form className="createUserForm"
    //         onSubmit={this.handleSignup.bind(this)}>
    //         <p>Username</p>
    //         <input className="createUserName"
    //             type="text"
    //             placeholder="Username"
    //             onChange={this.update("username")}
    //             value={this.state.username}></input>
    //
    //         <p>Password</p>
    //         <div className={this.state.warning}>Oh no! The passwords don't match!</div>
    //         <input className="editReview-input"
    //           type="password"
    //           placeholder="Password"
    //           onChange={this.update("password1")}
    //           value={this.state.password1}></input>
    //
    //         <p>Please re-enter your password.</p>
    //         <div className={this.state.warning}>Oh no! the passwords don't match!</div>
    //         <input className="editReview-input"
    //           type="password"
    //           placeholder="Re-enter your password"
    //           onChange={this.update("password2")}
    //           value={this.state.password2}></input>
    //
    //         <p>Your email</p>
    //         <input  className="createUserEmail"
    //           placeholder="Email"
    //           onChange={this.update("email")}
    //           value={this.state.email}></input>
    //
    //         <button className="review-submit button"
    //           type="submit">Submit!</button>
    //       </form>
    //
    //       </Modal>
    //
    //       <Modal className="loginUser"
    //           isOpen={this.state.loginUser}
    //           contentLabel="Modal3">
    //           <h1 className="signInTitle">Sign In!</h1>
    //
    //           <button className="closeModalButton"
    //             onClick={this.closeModal.bind(this)}>X</button>
    //
    //           <form className="loginUserForm"
    //           onSubmit={this.handleLogin.bind(this)}>
    //           <p>Username</p>
    //           <input className="createUserName"
    //               type="text"
    //               placeholder="Username"
    //               onChange={this.update("username")}
    //               value={this.state.username}></input>
    //
    //           <p>Password</p>
    //           <input className="loginUser-password"
    //             type="password"
    //             placeholder="Password"
    //             onChange={this.update("password1")}
    //             value={this.state.password1}></input>
    //
    //           <button className="loginUserSubmit button"
    //             type="submit">Submit!</button>
    //         </form>
    //
    //         </Modal>
    );
  }
}

export default PostsIndex;


//
//
// <div className="headerNav">
//
//   <div className="logo" src=""></div>
//
//   {this.renderErrors()}
//
//   <form className="loginForm" onSubmit={this.handleLogin}>
//     <input type="text"
//       placeholder="Username"
//       value={username}
//       onChange={this.update("username")}/>
//
//     <input type="password"
//       placeholder="Password"
//       value={password1}
//       onChange={this.update("password1")}/>
//     <br></br>
//
//     <div className="loginButtons">
//
//       <input className="auth-login-button button"
//         type="submit" value="Login"/>&nbsp;
//
//       </div>
//     </form>
//   </div>
//   <div className="signUpBody">
//     <div className="mottoContainer">
//       <h3 className="mottoSplash">
//         There is more to Japan than sushi and samurai.
//       </h3>
//       <div className="mottoSplashbottom">There's also comic books!</div>
//       <p className="mottoSubSplash">
//         Action, adventure, romance, a slice-of-life, and more! You'll
//         find it all in these comics from Japan. Organize your collection,
//         and find new comics to enjoy, here with mangaReads!
//       </p>
//     </div>
//     <form className="signUpForm" onSubmit={this.handleSignup}>
//       <h4>"New here? Create a free account!"</h4>
//
//       <input type="text"
//         placeholder="Name"
//         value={name}
//         onChange={this.update("name")} />
//
//       <input type="text"
//         placeholder="Email Address"
//         value={email}
//         onChange={this.update("email")} />
//
//       <input type="password"
//         placeholder="Password"
//         value={password2}
//         onChange={this.update("password2")}/>
//
//       <button className="submitButton button"
//         type="submit"
//         placeholder="Sign up">
//         Sign Up</button>
//
//       <button className="guestLogin button" type="submit"
//         onClick={this.handleGuest}
//         value="Guest Login">Guest Login</button>
//
//     </form>
//   </div>
