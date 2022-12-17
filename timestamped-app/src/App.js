import logo from './logo.svg';
import './App.css';
import AddNewForm from './components/add-new-form/AddNewForm';
import TodoList from './components/todoList/TodoList';
import TodoItem from './components/todo-item/TodoItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoteDetail from './components/note-detail/NoteDetail';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/add-new-note' element={<AddNewForm/>}/>
          <Route path='/all-note' element={<TodoList/>}/>
          <Route path="/note-details/:id" element={<NoteDetail />} />
        </Routes>
    </div>
  );
}

export default App;
