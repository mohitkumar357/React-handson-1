import React, { Component } from "react";
import "./Class.css";
export class Classcomp extends Component {
  render() {
    return (
      <div className="class">
        <h1>This is the creating using Class Component</h1>
        <p>This is done using external CSS</p>
        <p color={"red"}>This is done using inline CSS</p>
      </div>
    );
  }
}

export default Classcomp;
