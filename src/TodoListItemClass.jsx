import React from "react";

export class TodoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <label>
          {this.props.children}
          <input type="checkbox" defaultChecked={this.props.isComplete} />
        </label>
      </div>
    );
  }
}
