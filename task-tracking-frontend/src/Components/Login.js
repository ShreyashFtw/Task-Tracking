import React, { Component } from "react";
import { withRouter } from "react-router-dom"; // To access the history object
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    console.log("Login button clicked");
    const { username, password } = this.state;

    // check if username and password are not empty
    if (username.trim() !== "" && password.trim() !== "") {
      //Simulate a successful login by setting a flag or make an API request here
      // we'll use a local storage flag.
      localStorage.setItem("isLoggedIn", "true");
      console.log("Redirecting to /tasks/new"); 

      // Use the history object to navigate to the TaskForm component
      this.props.history.push("/tasks/new");
    } else {
      // Handle login failure 
      alert("Login failed. Please provide valid credentials.");
    }
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <input
          className="user"
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          className="pass"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button className="button" onClick={this.handleLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
