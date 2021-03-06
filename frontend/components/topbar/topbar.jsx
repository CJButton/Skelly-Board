

import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

import logout from '../../actions/session_actions';

import {hashHistory} from 'react-router';

class TopBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      password1: "",
      password2: "",
      email: "",
      createUser: false,
      newUser: false,
      loginUser: false,
      warning: "warningHide",
      errors: []
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      errors: nextState.errors
    });
    if (nextState.currentUser !== null) {
      this.closeModal();
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleLogin(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password1;
    const user = {user: {username, password}};
    this.props.login(user);
    if (this.props.currentUser !== null) {
      this.closeModal();
    }
  }

  createUserModal() {
    this.setState({
      createUser: true
    });
  }

  loginUserModal() {
    this.setState({
      loginUser: true
    });
  }

  closeModal() {
    this.setState({
      username: "",
      password1: "",
      password2: "",
      email: "",
      createUser: false,
      newUser: false,
      loginUser: false,
      warning: "warningHide",
      errors: []
    });
  }

  handleSignup(e) {
    e.preventDefault();

    if (this.state.password1 !== this.state.password2) {
      this.passwordMismatch();
    } else {
      this.signupAndCloseModal();
    }

    if (this.props.currentUser !== null) {
      this.closeModal();
    }
  }

  signupAndCloseModal() {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password1;
    const newUser = {user: {username, password, email}};
    this.props.signup(newUser);
  }

  passwordMismatch() {
    return (
      this.setState({
        warning: "warningShow"
      })
    );
  }

  componentWillMount() {
  Modal.setAppElement('body');
  }

  renderErrors() {
    if (this.state.errors !== []){
      return(
        <div className="errorsContainer">
          <ul>
            {this.state.errors.map((error, idx) => (
              <li key={idx} className="errorMessage">
                {error}
              </li>
            ))}
          </ul>
        </div>
    );
   }
  }

  render() {
    return (
      <header className="topbar-header">
          {this.props.currentUser === null ? <div className="loggedInDiv">
             <button className="createUserButton button"
                  onClick={this.createUserModal.bind(this)}>Create User</button>

                <button className="loginUserButton button"
                    onClick={this.loginUserModal.bind(this)}>Login!</button></div>:
                  null}

          {this.props.currentUser !== null ?
            <button className="logoutUserButton button"
              onClick={this.props.logout.bind(this)}>Logout!</button>: null}

            <Modal className="createUser"
                isOpen={this.state.createUser}
                contentLabel="Modal2">

              <div className="addFormTop">
                <h1 className="editFormTitle">Sign Up!</h1>
                <button className="closeModalButton button"
                  onClick={this.closeModal.bind(this)}>X</button>
              </div>

              <div className="createUserModalWrapper">

              <div className="createUserForm">
                <form className="createUserForm"
                  onSubmit={this.handleSignup.bind(this)}>
                  <p>Username</p>
                  <input className="createUserName"
                    type="text"
                    placeholder="Username"
                    onChange={this.update("username")}
                    value={this.state.username}></input>

                  <p>Password</p>
                  <input className="editReview-input"
                    type="password"
                    placeholder="Password"
                    onChange={this.update("password1")}
                    value={this.state.password1}></input>

                  <p>Please re-enter your password.</p>
                  <input className="editReview-input"
                    type="password"
                    placeholder="Re-enter your password"
                    onChange={this.update("password2")}
                    value={this.state.password2}></input>

                  <p>Your email</p>
                  <input  className="createUserEmail"
                    placeholder="Email"
                    onChange={this.update("email")}
                    value={this.state.email}></input>
                  <br></br>
                  <br></br>
                  <button className="user-submit button"
                    type="submit">Submit!</button>
                </form>
              </div>
              <div className="createUserErrors">
                {this.renderErrors()}
                <div className={this.state.warning}>Oh no! The passwords don't match!</div>
              </div>
            </div>
              </Modal>

              <Modal className="loginUser"
                  isOpen={this.state.loginUser}
                  contentLabel="Modal3">

                  <div className="addFormTop">
                    <h1 className="signInTitle">Sign In!</h1>
                    <button className="closeModalButton button"
                      onClick={this.closeModal.bind(this)}>X</button>
                  </div>



                  <form className="loginUserForm"
                  onSubmit={this.handleLogin.bind(this)}>
                  <p className="loginUsername">Username</p>
                  <input className="createUserName"
                      type="text"
                      placeholder="Username"
                      onChange={this.update("username")}
                      value={this.state.username}></input>

                  <p className="loginUserPass">Password</p>
                  <input className="loginUser-password"
                    type="password"
                    placeholder="Password"
                    onChange={this.update("password1")}
                    value={this.state.password1}></input>
                  <br></br>
                  <br></br>
                  <button className="loginUserSubmit button"
                    type="submit">Submit!</button>
                </form>

                {this.renderErrors()}
                </Modal>
      </header>

    );
  }
}

export default TopBar;
