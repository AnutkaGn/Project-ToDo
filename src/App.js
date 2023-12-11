import { useDispatch } from "react-redux";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { fromStorage } from "./store/todoSlice";
import { useEffect } from "react";
import './style.css';


function App() {
  const dispatch = useDispatch();

  const addFromStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todo'));
    if(storedTodos) dispatch(fromStorage(storedTodos.todoList));
  }

  useEffect(() => {
    if (!localStorage.getItem('todo')) localStorage.setItem('todo', JSON.stringify({todoList: []}))
    addFromStorage()
  }) //On load add to store from storage

  return (
    <div className="wrapper" >
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
