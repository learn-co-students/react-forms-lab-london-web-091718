import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

    
  handleChange(event) {
    if (event.target.value.length < 141){
      this.setState({
        value: event.target.value
      })} else {
        return alert("Maximum characters")
      }
  }

  render() {
    return (
      <div>

        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} value={this.state.value}/>
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
