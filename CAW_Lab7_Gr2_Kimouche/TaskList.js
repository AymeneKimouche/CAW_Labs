import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, subtasks: [] }]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <NewTaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} index={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
