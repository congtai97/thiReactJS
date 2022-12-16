import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewNote } from "../../redux/slice/todoSlice";
import "./addnewform.scss";

function AddNewForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      detail,
      id: uuidv4(),
    };

    dispatch(addNewNote(data));

    const jsonNotes = JSON.stringify(data);
    localStorage.setItem("NotesApp", jsonNotes);
  };

  return (
    <div className="add-new-form">
      <h1>Timestamped Notes App</h1>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Note Title"
      />
      <input
        onChange={(e) => {
          setDetail(e.target.value);
        }}
        placeholder="Note Details"
      />
      <button onClick={handleSubmit}>Add Note</button>
      <hr></hr>
    </div>
  );
}
export default AddNewForm;
