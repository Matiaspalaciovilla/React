import "./TodoList.css";
import { TodoContext } from "../app/TodoContext";
import { TodoItem } from "../todoitem/TodoItem";

function TodoList(props) {
  return <ul>{props.children}</ul>;
}

export { TodoList };
