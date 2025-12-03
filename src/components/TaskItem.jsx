import React from "react";

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          disabled={!task.completed}
          onChange={() => {
            if (task.completed) {
              onToggle(task.id);
            }
          }}
          style={{ cursor: task.completed ? "pointer" : "default" }}
        />
        <span>{task.text}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Pendiente" : "Completar"}
        </button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}

export default TaskItem;
