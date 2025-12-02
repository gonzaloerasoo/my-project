import React, { useState } from "react";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
