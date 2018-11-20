import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  userNameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  submitFormHandler = (event) => {
    event.preventDefault();
    (this.state.username && this.state.password) && this.props.onSubmit({...this.state});
  };

  render() {
    return (
      <form onSubmit={this.submitFormHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.userNameHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.passwordHandler}/>
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
