import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: [],
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  // textInput = () => {

  // }

  render() {
    const { tweet } = this.state
    const { handleChange } = this
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
          onChange={handleChange}
          value={tweet} />
          <p>Characters Left: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
