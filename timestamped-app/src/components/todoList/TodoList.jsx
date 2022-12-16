import { useSelector } from "react-redux";
import { todoNoteSelector } from "../../redux/selector/selectors";
import TodoItem from "../todo-item/TodoItem";

function TodoList() {
  // const data = useSelector(todoNoteSelector)
  const todoList = useSelector((state) => state.todoReducer.data);
  console.log(todoList);

  return (
    <div>
      {todoList.map((item) => {
        <TodoItem title={item.title} detail={item.detail} />;
      })}
    </div>
  );
}

export default TodoList;
