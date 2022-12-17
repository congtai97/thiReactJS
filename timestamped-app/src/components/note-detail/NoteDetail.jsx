import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./notedetail.scss";

function NoteDetail() {
  const { id } = useParams();
  console.log("ID detail: ", id);
  const todoList = useSelector((state) => state.todoReducer.data);

  const newNote = todoList.filter((item) => item.id === id);

  console.log("Note New: ", newNote[0].title);
  return (
    <div className="note-detail">
      <h2>NOTE DETAIL</h2>
      <div>
        <Link to="/all-note">&larr; Back to Note List</Link>
      </div>
      <p>Title: {newNote[0].title}</p>
      <p>{newNote[0].detail}</p>
    </div>
  );
}

export default NoteDetail;
