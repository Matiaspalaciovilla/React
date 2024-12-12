import "./App.css";

import React from "react"; 
// const defaultTodos = [
// { id: 1, text: "Actividad1", completed: false },
// { id: 2, text: "Actividad2", completed: false },
// { id: 3, text: "Actividad3", completed: false },
// { id: 4, text: "Actividad4", completed: false },
// { id: 5, text: "Actividad5", completed: false },
// { id: 6, text: "Actividad6", completed: false },
// { id: 7, text: "Actividad7", completed: false },
// { id: 8, text: "Actividad8", completed: false },
// { id: 9, text: "Actividad9", completed: false },
// { id: 10, text: "Actividad10", completed: false },
// ];
// localStorage.setItem("TODOS", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS");
function useLocalStorage(itemName, initialValue) {
  const localStorageTodos = localStorage.getItem("TODOS");
  let parsedItem;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS", JSON.stringify([]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageTodos);
  }
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
}

export{ useLocalStorage };