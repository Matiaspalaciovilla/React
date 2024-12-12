function TodoCounter({ total, completed }) {
  if (total == 0) {
    return (
      <h1
        style={{
          fontSize: "24px",
        }}
      >
        No tienes tareas...
      </h1>
    );
  } else if (total !== completed) {
    return (
      <h1
        style={{
          fontSize: "24px",
        }}
      >
        Has completado {completed} de {total} tareas
      </h1>
    );
  } else {
    return (
      <h1
        style={{
          fontSize: "24px",
        }}
      >
        Has completado todas tus tareas!
      </h1>
    );
  }
}

export { TodoCounter };
