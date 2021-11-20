import React, { Component } from "react";
import Header from "./components/Header";
import Slides from "./components/Slides";

import data from "./data/slides";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slides slides={data} />
      </div>
    );
  }
}
