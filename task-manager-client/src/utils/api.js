const API_URL = 'http://localhost:5000/api';

export const register = async (userData) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const login = async (userData) =>{
    const response = await fetch(`${API_URL}/users/login`,{
       method:'POST',
       headers:{
        'Content-Type' : 'application/json',
       },
       body:JSON.stringify(userData),
    });
    return response.json();
};

export const getTasks = async (token) =>{
    const response = await fetch(`${API_URL}/tasks`,{
        headers:{
            'Content-Type' : 'application/json',
            'x-auth-token' : token,
        },

    });
    return response.json();
};

export const createTask = async (taskData, token) => {
    const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        },
        body: JSON.stringify(taskData),
    });
    return response.json();
};

export const updateTask = async (taskId, taskData, token) => {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        },
        body: JSON.stringify(taskData),
    });
    return response.json();
};

export const deleteTask = async (taskId, token) => {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        },
    });
    return response.json();
};


