import React, { Component } from "react";
import { render } from "react-dom";

import { TriangleArrow, Mudgun } from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>onino-icons Demo</h1>
        <TriangleArrow />
        <Mudgun size={150} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
