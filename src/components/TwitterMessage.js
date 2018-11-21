import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charsLeft: 140,
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      charsLeft: this.props.maxChars - event.target.value.length,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value}/>
        <span>{this.state.charsLeft} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;
