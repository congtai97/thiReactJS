import "./todoitem.scss";

function TodoItem({ title, detail }) {
  console.log("TodoItem", { title, detail });
  return (
    <div className="todo-list">
      <div></div>
      <div>
        <div></div>
        <div>(Show Details)</div>
      </div>
    </div>
  );
}
export default TodoItem;
