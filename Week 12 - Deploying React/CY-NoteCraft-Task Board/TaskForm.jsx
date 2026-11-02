import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') {
      return;
    }
    onAdd(text.trim());
    setText('');
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;