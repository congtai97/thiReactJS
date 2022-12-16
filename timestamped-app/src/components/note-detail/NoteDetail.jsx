import { useSelector } from "react-redux";
import { useParams } from "react-router";

function NoteDetail() {
  const { id } = useParams();
  console.log("ID detail: ", id);
  const todoList = useSelector((state) => state.todoReducer.data);

  const newNote = todoList.filter((item) => item.id === id);

  console.log("Note New: ", newNote[0].title);
  return (
    <>
      <p>Title: {newNote[0].title}</p>
      <p>{newNote[0].detail}</p>
    </>
  );
}

export default NoteDetail;
