import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import httpProxy from 'http-proxy';


function Main() {
  const [tasks, setTasks] = useState([]);
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const proxy = new httpProxy({
      target: 'http://localhost:3000',
    });
    
    const axiosInstance = axios.create({
      proxy: proxy,
    });

    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/tasks/');
        setTasks(response.data); 
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
     return (
  <div className='flex content-center flex-col'>
  <Link>
    <button className='bg-green'>Add TasK</button>
  </Link>
  
  <table className="table-fixed self-center">
  <thead>
    <tr>
      <th>Task</th>
      <th>Description</th>
      <th>Completed</th>
    </tr>
  </thead>
  <tbody>
    {
       tasks.map((task)=>
    <tr key={task.id}>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>{task.completed ? 'Yes' : 'No'}</td>
    </tr>
      )
   }
  </tbody>
</table>
</div>
  )
}

export default Main