// import React,{useState} from "react";

// const TaskForm = ({onCreateTask})=>{

//     const [formData,setFormData] = useState({title:'',description:'',dueDate:''});

//     const handleChange = (e) =>{
//         setFormData({...formData,[e.target.name]: e.target.value});
//     };

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         onCreateTask(formData);
//         setFormData({title:'',description:'',dueDate:''});
//     };

//   return(
//     <form onSubmit={handleSubmit}>
//    <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//             />
//             <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={handleChange}
//             />
//             <input
//                 type="date"
//                 name="dueDate"
//                 value={formData.dueDate}
//                 onChange={handleChange}
//             />
//             <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskForm;

// import React, { useState } from 'react';
// import { TextField, Button, Grid } from '@mui/material';

// const TaskForm = ({ onCreateTask,task,isUpdateTask }) => {
//     const [taskData, setTaskData] = useState({ title: '', description: '',dueDate:'' });
//     if(isUpdateTask)
//         setTaskData({title:task.title,description:task.description,dueDate:task.dueDate});

//     const handleChange = (e) => {
//         setTaskData({ ...taskData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         var taskId=null;
//         onCreateTask(taskData,taskId=task.taskId);
//         setTaskData({ title: '', description: '',dueDate:'' });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                     <TextField
//                         variant="outlined"
//                         fullWidth
//                         label="Title"
//                         name="title"
//                         value={taskData.title}
//                         onChange={handleChange}
//                         required
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         variant="outlined"
//                         fullWidth
//                         label="Description"
//                         name="description"
//                         value={taskData.description}
//                         onChange={handleChange}
//                         required
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         variant="outlined"
//                         fullWidth
//                         label="Due Date"
//                         name="dueDate"
//                         type="date"
//                         value={taskData.dueDate}
//                         onChange={handleChange}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                         required
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <Button type="submit" fullWidth variant="contained" color="primary">
//                         Add Task
//                     </Button>
//                 </Grid>
//             </Grid>
//         </form>
//     );
// };

// export default TaskForm;


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
