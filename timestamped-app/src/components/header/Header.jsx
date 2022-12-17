import { Route, Routes, useNavigate } from "react-router";
import "./header.scss";

function Header() {
  const navigate = useNavigate();
  const handleAddNewNote = (e) => {
    e.preventDefault();
    navigate("/add-new-note");
  };
  const handleAllNote = (e) => {
    e.preventDefault();
    navigate("/all-note");
  };
  return (
    <div className="header">
      <h1>Timestamped Notes App</h1>
      <div className="btn-handle">
        <button onClick={handleAddNewNote}>Add new Note</button>
        <button onClick={handleAllNote}>All Note</button>
      </div>
    </div>
  );
}

export default Header;
