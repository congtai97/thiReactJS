import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { deleteNote } from "../../redux/slice/todoSlice";
import NoteDetail from "../note-detail/NoteDetail";

import "./todoitem.scss";

function TodoItem({ note }) {
  const dispatch = useDispatch();

  const handleDelete = (note) => {
    dispatch(deleteNote(note));
  };

  return (
    <>
      <div className="todo-list">
        <div>
          <p style={{ "font-size": "24px" }}>{note.title}</p>
        </div>
        <div>
          <div>
            {note.noteDate} {note.noteTime}
          </div>
          <div className="btn-handle">
            <Link to={`/note-details/${note.id}`}>
              <div>(Show Details)</div>
            </Link>
            <Link to={"/"}>
              <div onClick={() => handleDelete(note)}>(Remove Note)</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
