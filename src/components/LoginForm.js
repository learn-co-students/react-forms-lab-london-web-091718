import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = event => {
    console.log(event)
    event.preventDefault();
    (this.state.username && this.state.password) && this.props.onSubmit({...this.state})
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      // username: event.target.value,
      // password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
