import React from "react";
import { FaTrash, FaCheck, FaClock } from "react-icons/fa";

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="task-content">
        <span>{task.text}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? <FaClock /> : <FaCheck />}
        </button>
        <button onClick={() => onDelete(task.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
