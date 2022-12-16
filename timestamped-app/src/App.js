import logo from './logo.svg';
import './App.css';
import AddNewForm from './components/add-new-form/AddNewForm';
import TodoList from './components/todoList/TodoList';
import TodoItem from './components/todo-item/TodoItem';

function App() {
  return (
    <div className="App">
      <AddNewForm/>
      <TodoList/>
    </div>
  );
}

export default App;
