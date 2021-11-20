import React, { Component } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Slides from "./components/Slides";

import data from "./data/slides";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: data,
      index: 0,
    };
  }

  resetSlides = () => {
    this.setState({
      index: 0,
    });
  };

  nextSlide = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index + 1,
      };
    });
  };

  prevSlide = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Button
          disabled={this.state.index === 0 ? true : false}
          title="Reset"
          handleClick={this.resetSlides}
        />
        <Button
          disabled={this.state.index - 1 < 0 ? true : false}
          title="Prev"
          handleClick={this.prevSlide}
        />
        <Button
          disabled={
            this.state.index + 1 > this.state.slides.length - 1 ? true : false
          }
          title="Next"
          handleClick={this.nextSlide}
        />
        <Slides
          slides={this.state.slides}
          index={this.state.index}
          nextSlide={this.nextSlide}
          prevSlide={this.prevSlide}
          resetSlides={this.resetSlides}
        />
      </div>
    );
  }
}
