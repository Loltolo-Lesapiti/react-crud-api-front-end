import React, { useState } from 'react';
import axios from 'axios';

function Create() { // Changed the component name to start with an uppercase letter
  const [task, setTask] = useState({ // Use parentheses () for useState
    name: '',
    description: '',
    completed: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:3000/api/v1/tasks/', { task });
      console.log('Task added successfully');
    } catch (error) {
      console.log('Error creating task', error);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default Create; // Changed the component name to start with an uppercase letter
