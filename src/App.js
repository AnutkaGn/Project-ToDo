import { useDispatch } from "react-redux";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { fromStorage } from "./store/todoSlice";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch();

  const addFromStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todo'));
    if(storedTodos) dispatch(fromStorage(storedTodos.todoList));
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify({todoList: []}))
    addFromStorage()
  }) //On load add to store from storage

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
