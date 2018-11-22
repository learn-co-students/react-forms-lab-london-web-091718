import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleChange = (event) =>
    this.setState({ text: event.target.value })

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={ (event) => this.handleChange(event) } value={ this.state.text } />
        { this.props.maxChars - this.state.text.length }
      </div>
    );
  }
}

export default TwitterMessage;

