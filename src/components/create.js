import axios from 'axios';
import React, { useState } from 'react';

function Create() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCompleted = (e) => {
    setCompleted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data for axios api.
    const formData={
      task,
      description,
      completed}
    // Pass the form data to axios.
    try{
      const response= axios.post("http://localhost:3000/api/v1/tasks/", formData)
      if (response.status === 201) {
        console.log('Data added successfully:', response.data);
      } else {
        console.log('Unexpected response:', response);
      }
    }catch (error){
      console.error("Error", error)
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="bg-gray-200 p-4 rounded-lg">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="input1">
            Task:
          </label>
          <input
            type="text"
            id="input1"
            className="w-full p-2 border rounded-md"
            value={task}
            onChange={handleTask}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="input2">
            Description:
          </label>
          <input
            type="text"
            id="input2"
            className="w-full p-2 border rounded-md"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={completed}
              onChange={handleCompleted}
            />
            Task Completed
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
