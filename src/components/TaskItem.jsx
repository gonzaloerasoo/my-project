import React from "react";

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
