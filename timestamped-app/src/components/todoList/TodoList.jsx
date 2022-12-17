import { useSelector } from "react-redux";
import TodoItem from "../todo-item/TodoItem";
import "./todolist.scss";

function TodoList() {
  const todoList = useSelector((state) => state.todoReducer.data);
  console.log("note List :", todoList);

  return (
    <div className="todo-list">
      <h2>NOTE LIST</h2>
      {todoList.map((note) => (
        <div key={note.id}>
          <TodoItem note={note} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
