import { useState } from "react";
import NewTaskForm from "./components/NewTask/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";

const INITIAL_TASKS = [
  { id: "1", text: "Task 1" },
  { id: "2", text: "Task 2" },
  { id: "3", text: "Task 3" },
];

function App() {
  const [taskList, setTaskList] = useState(INITIAL_TASKS);

  const newTask = (task) => {
    setTaskList((prevTaskList) => [...prevTaskList, task]);
  };

  const deleteTask = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((e) => e.id !== id));
  };

  return (
    <div className="App">
      <NewTaskForm newTask={newTask} />
      <TaskList items={taskList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
