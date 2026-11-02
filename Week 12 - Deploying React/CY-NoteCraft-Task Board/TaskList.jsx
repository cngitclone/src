import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onRemove }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <button type="button" onClick={() => onRemove(index)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;