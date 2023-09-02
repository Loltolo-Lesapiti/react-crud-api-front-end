import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Main() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading]=useState(true);
    useEffect(() => {
      fetchTasks();
    }, []);

    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/api/v1/tasks/");
        setTasks(response.data);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false)
      }
    };

    if(loading){
      return <h2>Loading</h2>
    }
    
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