// import React from 'react';

// const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
//     return (
//         <div>
//             <h3>Task List</h3>
//             {tasks.map((task) => (
//                 <div key={task._id}>
//                     <h4>{task.title}</h4>
//                     <p>{task.description}</p>
//                     <p>{new Date(task.dueDate).toLocaleDateString()}</p>
//                     <button onClick={() => onUpdateTask(task._id, { status: 'completed' })}>
//                         Mark as Completed
//                     </button>
//                     <button onClick={() => onDeleteTask(task._id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TaskList;

// import React from 'react';
// import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Typography } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';

// const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
//     return (
//         <div>
//             <Typography variant="h6" gutterBottom>
//                 Task List
//             </Typography>
//             <List>
//                 {tasks.map((task) => (
//                     <ListItem key={task._id} divider>
//                         <ListItemText primary={task.title} secondary={<> {task.description}
//                                     <br />
//                                     Due Date: {new Date(task.dueDate).toLocaleDateString()}</>}  />
//                         <ListItemSecondaryAction>
//                             <IconButton edge="end" aria-label="edit" onClick={() => onUpdateTask(task)}>
//                                 <Edit />
//                             </IconButton>
//                             <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(task._id)}>
//                                 <Delete />
//                             </IconButton>
//                         </ListItemSecondaryAction>
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );
// };

// export default TaskList;

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

