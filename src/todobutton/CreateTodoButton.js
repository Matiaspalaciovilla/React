function CreateTodoButton({ setOpenModal }) {
  return (
    <button className="addBtn" onClick={() => setOpenModal((state) => !state)}>
      +
    </button>
  );
}

export { CreateTodoButton };
