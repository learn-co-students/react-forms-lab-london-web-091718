import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  
  // sets user name input
  userNameformInput = event => {
    this.setState({
      username: event.target.value
    })
  }
  // sets password
  passNameformInput = event => {
    this.setState({
      password: event.target.value
    })
  }
  
  // handles the submit event
  formSubmit = event => {
    event.preventDefault()
    if (this.userNameformInput !== "" || this.passNameformInput !== "") {
      alert("Please enter a valid Username and Password")
    } else {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      // adding an event handler to the submit form
      <form onSubmit={ this.formSubmit }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={ this.userNameformInput } />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={ this.passNameformInput } />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
