import React, { Component } from "react";

export default class Slides extends Component {
  renderSlide = () => {
    const slide = this.props.slides[this.props.index];
    return (
      <>
        <h2 className="display-3 mt-4">{slide.title}</h2>
        <p className="lead mt-4">{slide.description}</p>
      </>
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="container text-center border pt-2 pb-5 shadow rounded">
            {this.renderSlide()}
          </div>
        </div>
      </div>
    );
  }
}
