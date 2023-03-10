import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <div>
      <div className="d-flex justify-content-between my-2 border-bottom">
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
        </div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
