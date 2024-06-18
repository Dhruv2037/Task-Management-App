import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ onSaveTask, task, isUpdateTask }) => {
    const [formData, setFormData] = useState({ title: '', description: '', dueDate: '' });

    useEffect(() => {
        if (isUpdateTask && task) {
            setFormData({
                title: task.title,
                description: task.description,
                dueDate: task.dueDate,
            });
        }
    }, [isUpdateTask, task]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveTask({ ...formData, taskId: task.taskId });
        setFormData({ title: '', description: '', dueDate: '' });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <TextField
                name="title"
                label="Title"
                variant="outlined"
                fullWidth
                value={formData.title}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                value={formData.description}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                name="dueDate"
                label="Due Date"
                type="date"
                variant="outlined"
                fullWidth
                value={formData.dueDate}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                {isUpdateTask ? 'Update Task' : 'Add Task'}
            </Button>
        </Box>
    );
};

export default TaskForm;
