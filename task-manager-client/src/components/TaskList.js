import React from 'react';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Task List
            </Typography>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task._id} divider>
                        <ListItemText
                            primary={task.title}
                            secondary={
                                <>
                                    <span>{task.description}</span>
                                    <br />
                                    <span>Due Date: {new Date(task.dueDate).toUTCString().slice(5,16)}</span>
                                </>
                            }
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => onUpdateTask(task._id)}>
                                <Edit />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(task._id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskList;

