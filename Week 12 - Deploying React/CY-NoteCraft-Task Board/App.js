import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>NoteCraft</h1>
        <h3>Task Board</h3>
      </header>

      <div className="board">
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onRemove={removeTask} />
      </div>
    </div>
  );
}

export default App;