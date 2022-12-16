import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import NoteDetail from "../note-detail/NoteDetail";
import TodoItem from "../todo-item/TodoItem";

function TodoList() {
  // const data = useSelector(todoNoteSelector)
  const todoList = useSelector((state) => state.todoReducer.data);
  console.log("note List :", todoList);

  return (
    <>
      {todoList.map((note) => (
        <div key={note.id}>
          <TodoItem note={note} />
        </div>
      ))}
      <Routes>
        <Route path="/note-details/:id" element={<NoteDetail />} />
      </Routes>
    </>
  );
}

export default TodoList;
