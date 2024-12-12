import "./TodoItem.css";
import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span
        className={`Icon done ${props.completed && "IconLineBtn"} ${
          !props.completed && "done2"
        }`}
        onClick={props.onCompleted}
      >
        Done
      </span>
      <p className={`${props.completed && "IconLine"}`}>{props.text}</p>
      <span className="Icon delete" onClick={props.onDeleted}>
        Delete
      </span>
    </li>
  );
}

export { TodoItem };

