import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      messageLength: 0
    };
  }

  messageInputHandler = (event) => {
    this.setState({
      message: event.target.value,
      messageLength: event.target.value.length
    })
  };

  render() {
    return (
      <div>
        <p><strong>Your message: {this.state.message}</strong></p>
        <input type="text" value={this.state.message} onChange={this.messageInputHandler}/>
        <p>Symbols left: {this.props.maxChars - this.state.messageLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;
