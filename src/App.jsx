import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    return saved ? saved : "all";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((t) =>
    filter === "all" ? true : filter === "completed" ? t.completed : !t.completed
  );

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 && (
        <div className="actions">
          <button className="delete-all" onClick={deleteAll}>Eliminar todas</button>
        </div>
      )}
      <div className="filters">
        <button
          className={filter === "all" ? "filter active" : "filter"}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className={filter === "completed" ? "filter active" : "filter"}
          onClick={() => setFilter("completed")}
        >
          Completadas
        </button>
        <button
          className={filter === "pending" ? "filter active" : "filter"}
          onClick={() => setFilter("pending")}
        >
          Pendientes
        </button>
      </div>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
