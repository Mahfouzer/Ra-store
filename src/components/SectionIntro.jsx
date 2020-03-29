import React, { Component } from "react";

export default class SectionIntro extends Component {
  render() {
    return (
      <div
        className={`within-container ${this.props.centered &&
          "centered-content"}`}
      >
        {this.props.children}
      </div>
    );
  }
}
