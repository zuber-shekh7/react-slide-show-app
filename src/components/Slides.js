import React, { Component } from "react";

export default class Slides extends Component {
  renderSlides = () => {
    return this.props.slides.map((slide, index) => {
      return <h2 key={slide.id}>{slide.title}</h2>;
    });
  };

  render() {
    return <div>{this.renderSlides()}</div>;
  }
}
