import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  let todosStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={todosStyle}>
      <h3 className="my-3">Todos List</h3>
      <hr />
      {props.todos.length == 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo?.id} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
