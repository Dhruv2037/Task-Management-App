const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req,res,next){
    const token =  req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg:'token is  not valid'});
    }
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