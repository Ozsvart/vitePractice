import React from "react";
/* import { TodoList } from "./TodoList.jsx"; */
import { TodoListClass } from "./TodoListClass";
/* import { MyName } from "./MyName"; */
import { MyNameClass } from "./MyNameClass";

function App() {
  /* return React.createElement(
    "h1",
    { id: "5" },
    "Hello World, I'm here!!!",
    React.createElement("span", null, "Bye")
  ); 

  const myCustomLabel = <label htmlFor="inputId">Hello again!</label>;
  return (
    <div className="large" id="largeDiv">
      <h1 id="5" style={{ background: "yellow" }}>
        Hello World, I'm here!!!
      </h1>
      {myCustomLabel}
      <br />
      <input id="inputID" type="number" defaultValue={3} />
      <h2 id="5" style={{ background: "pink" }}>
        <span>Bye!</span>
      </h2>
    </div>
  ); */

  return (
    <div>
      <h1>Todo List</h1>
      {/* <TodoList /> */}
      <TodoListClass />
      {/* <MyName /> */}
      <MyNameClass />
    </div>
  );
}

export default App;
