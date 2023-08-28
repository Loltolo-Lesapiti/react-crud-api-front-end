import React, { useState } from 'react';

function EditTask() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleInput1Change = (e) => {
    setInput1Value(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2Value(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxValue(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form values and checkbox status here
    console.log('Input 1:', input1Value);
    console.log('Input 2:', input2Value);
    console.log('Checkbox:', checkboxValue);
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
            value={input1Value}
            onChange={handleInput1Change}
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
            value={input2Value}
            onChange={handleInput2Change}
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={checkboxValue}
              onChange={handleCheckboxChange}
            />
            Task Completed
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditTask;
