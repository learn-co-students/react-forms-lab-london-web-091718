import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.state.message.length < 140 && this.setState({message: event.target.value}) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.props.maxChars - this.state.message.length} characters left</p>
        <input type="text" message={this.state.message} onChange={(e) => this.handleChange(e)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
