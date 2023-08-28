import apiConfig from "../http_common";
// Creating CRUD methods.
const displayTasks=()=>{
    return apiConfig.get('/tasks');
}

const show=(id)=>{
    return apiConfig.get(`/tasks/${id}`);
}

const edit=(id, data)=>{
    return apiConfig.put(`/tasks/${id}`, data);
}

const destroy=(id)=>{
    return apiConfig.delete(`/tasks/${id}`);
}

const create=(id, data)=>{
    return apiConfig.post(`/tasks/${id}`, data);
}

export default {displayTasks, create,destroy,edit};
