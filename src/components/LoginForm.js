import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      city: '',
      password: ''
    };
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value

    })
  }



 handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.onSubmit(this.state)
  }

  render() {
    const { username, password, city } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={handleChange} value={username} />
            <input id="city" name="city" type="text" onChange={handleChange} value={city} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={handleChange} value={password} />
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
