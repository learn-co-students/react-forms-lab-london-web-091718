import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.message}
          onChange={this.handleChange}
        />
        {this.charactersLeft()}
      </div>
    );
  }

  charactersLeft = message => {
    return this.props.maxChars - this.state.message.length
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }
}

export default TwitterMessage;
