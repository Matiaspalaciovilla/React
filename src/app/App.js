import React from "react";
import { TodoProvider, TodoContext } from "./TodoContext.js";
import { TodoCounter } from "../todocounter/TodoCounter.js";
import { TodoSearch } from "../todosearch/TodoSearch.js";
import { TodoList } from "../todolist/TodoList.js";
import { TodoItem } from "../todoitem/TodoItem.js";
import { TodoForm } from "../form/TodoForm.js"
import { CreateTodoButton } from "../todobutton/CreateTodoButton.js";
import { Modal } from "../modal/modal.js";
import Loading from "../loading messages/loading/loading.js";
import Errors from "../loading messages/error/error.js";

function App() {
  return (
    <TodoProvider>
      <TodoAppContent />
    </TodoProvider>
  );
}

function TodoAppContent() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <div className="App">
      <TodoCounter />
      <div className="searchArea">
        <TodoSearch />
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </div>
      <TodoList>
        <TodoContent
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </TodoList>
    </div>
  );
}

function TodoContent({
  error,
  loading,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      {error && (
        <Errors errorMessage="Hubo un problema al obtener los datos." />
      )}
      {loading && <Loading />}
      {!loading && searchedTodos.length === 0 && (
        <p className="message">esperando nuevas tareas...</p>
      )}
      {searchedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onCompleted={() => completeTodo(todo.text)}
          onDeleted={() => deleteTodo(todo.text)}
        />
      ))}
    </>
  );
}

export default App;
