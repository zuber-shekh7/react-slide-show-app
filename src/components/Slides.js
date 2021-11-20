import React, { Component } from "react";

export default class Slides extends Component {
  renderSlide = () => {
    return <h2>{this.props.slides[this.props.index].title}</h2>;
  };

  render() {
    return <div>{this.renderSlide()}</div>;
  }
}
