import React from "react";

export class MyNameClass extends React.Component {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}
