import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className="btn btn-primary btn-lg mx-4 px-5"
        disabled={this.props.disabled}
        onClick={this.props.handleClick}
      >
        {this.props.title}
      </button>
    );
  }
}
