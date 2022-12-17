import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { deleteNote } from "../../redux/slice/todoSlice";

import "./todoitem.scss";

function TodoItem({ note }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (note) => {
    dispatch(deleteNote(note));
    navigate("/all-note");
  };

  return (
    <>
      <div className="todo-item">
        <div>
          <p style={{ "font-size": "24px" }}>{note.title}</p>
        </div>
        <div>
          <div>
            {note.noteDate} {note.noteTime}
          </div>
          <div className="btn-handle">
            <Link to={`/note-details/${note.id}`}>
              <div className="detail">(Show Details)</div>
            </Link>
            <Link to={"/all-note"}>
              <div className="delete" onClick={() => handleDelete(note)}>
                (Remove Note)
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
