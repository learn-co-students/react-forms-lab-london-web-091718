import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange (event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validate = () => {
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit(this.state)
    } else {
      return alert("Please input your details")
    }
  }

  render() {
    return (
      <form onSubmit={event => {event.preventDefault(); this.validate()}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleInputChange(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleInputChange(event)} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
