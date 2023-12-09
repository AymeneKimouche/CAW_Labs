import React, { useState } from 'react';

function Task({ index, task, deleteTask }) {
  const [subtasks, setSubtasks] = useState([]);
  const [subtaskText, setSubtaskText] = useState('');

  const addSubtask = () => {
    if (subtaskText.trim() !== '') {
      setSubtasks([...subtasks, { text: subtaskText, done: false }]);
      setSubtaskText('');
    }
  };

  const toggleSubtask = (subtaskIndex) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[subtaskIndex].done = !updatedSubtasks[subtaskIndex].done;
    setSubtasks(updatedSubtasks);
  };

  return (
    <div className="task">
      <div>
        {task.text}
        <button onClick={() => deleteTask(index)}>X</button>
      </div>
      <div>
        <button onClick={addSubtask}>Add Subtask</button>
        {subtasks.map((subtask, subtaskIndex) => (
          <div key={subtaskIndex}>
            {subtask
.done ? (
              <span>
                <s>{subtask.text}</s>
              </span>
            ) : (
              <span>{subtask.text}</span>
            )}
            <button onClick={() => toggleSubtask(subtaskIndex)}>
              {subtask.done ? 'Undone' : 'Done'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
