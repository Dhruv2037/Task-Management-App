// import React, { useEffect, useState } from 'react';
// import { getTasks, createTask, updateTask, deleteTask } from '../utils/api';
// import TaskForm from './TaskForm';
// import TaskList from './TaskList';

// const Dashboard = ({ token }) => {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         const fetchTasks = async () => {
//             const response = await getTasks(token);
//             setTasks(response);
//         };
//         fetchTasks();
//     }, [token]);

//     const handleCreateTask = async (taskData) => {
//         const response = await createTask(taskData, token);
//         setTasks([...tasks, response]);
//     };

//     const handleUpdateTask = async (taskId, taskData) => {
//         const response = await updateTask(taskId, taskData, token);
//         setTasks(tasks.map((task) => (task._id === taskId ? response : task)));
//     };

//     const handleDeleteTask = async (taskId) => {
//         await deleteTask(taskId, token);
//         setTasks(tasks.filter((task) => task._id !== taskId));
//     };

//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <TaskForm onCreateTask={handleCreateTask} />
//             <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
//         </div>
//     );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import { getTasks, createTask, updateTask, deleteTask } from '../utils/api';
// import TaskForm from './TaskForm';
// import TaskList from './TaskList';
// import { Container, Typography, Paper } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledPaper = styled(Paper)(({ theme }) => ({
//     padding: theme.spacing(3),
//     marginTop: theme.spacing(3),
// }));

// const Dashboard = ({ token }) => {
//     const [tasks, setTasks] = useState([]);
//     const [task,setTask] = useState({taskId:'',title: '', description: '',dueDate:''});
//     const [isUpdateTask,setIsUpdateTask] = useState(false);

//     useEffect(() => {
//         const fetchTasks = async () => {
//             const response = await getTasks(token);
//             setTasks(response);
//         };
//         fetchTasks();
//     }, [token]);

//     const handleCreateTask = async (taskData,taskId) => {
//         if(taskId)
//             {
//                 const response = await updateTask(taskId, taskData, token);
//                 setTasks(tasks.map((task) => (task._id === taskId ? response : task)));
//                 setIsUpdateTask(false);
//             }
//         else{
//         const response = await createTask(taskData, token);
//         setTasks([...tasks, response]);
//         }
//     };

//     // const handleUpdateTask = async (task) => {
//     //     setIsUpdateTask(true);
//     //     setTask({taskId:task._id,title:task.title,description:task.description,dueDate:task.dueDate});
//     //     // const response = await updateTask(taskId, taskData, token);
//     //     // setTasks(tasks.map((task) => (task._id === taskId ? response : task)));
//     // };

//     const handleUpdateTask = async (task) => {
//         setIsUpdateTask(true);
//         setTask({ taskId: task._id, title: task.title, description: task.description, dueDate: task.dueDate });
//     };

//     const handleDeleteTask = async (taskId) => {
//         await deleteTask(taskId, token);
//         setTasks(tasks.filter((task) => task._id !== taskId));
//     };

//     return (
//         <Container component="main" maxWidth="md">
//             <StyledPaper elevation={3}>
//                 <Typography component="h1" variant="h4" align="center" gutterBottom>
//                     Dashboard
//                 </Typography>
//                 <TaskForm onCreateTask={handleCreateTask} task={task} isUpdateTask={isUpdateTask} />
//                 <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
//             </StyledPaper>
//         </Container>
//     );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../utils/api';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
}));

const Dashboard = ({ token , setToken  }) => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ taskId: '', title: '', description: '', dueDate: '' });
    const [isUpdateTask, setIsUpdateTask] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks(token);
            setTasks(response);
        };
        fetchTasks();
    }, [token]);

    const handleSaveTask = async (taskData) => {
        if (isUpdateTask && taskData.taskId) {
            const response = await updateTask(taskData.taskId, taskData, token);
            setTasks(tasks.map((t) => (t._id === taskData.taskId ? response : t)));
            setIsUpdateTask(false);
        } else {
            const response = await createTask(taskData, token);
            setTasks([...tasks, response]);
        }
        setTask({ taskId: '', title: '', description: '', dueDate: '' });
    };

    const handleUpdateTask = (taskId) => {
        const taskToUpdate = tasks.find((t) => t._id === taskId);
        console.log(taskToUpdate.dueDate.split('T')[0]);
        setTask({
            taskId: taskToUpdate._id,
            title: taskToUpdate.title,
            description: taskToUpdate.description,
            dueDate: taskToUpdate.dueDate.split('T')[0], // Format date for input field
        });
        setIsUpdateTask(true);
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId, token);
        setTasks(tasks.filter((task) => task._id !== taskId));
    };

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    return (
        <Container component="main" maxWidth="md">
            <StyledPaper elevation={3}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    Dashboard
                </Typography>
                <button onClick={handleLogout} variant="contained" color="primary">
                    Logout
                </button>
                <TaskForm onSaveTask={handleSaveTask} task={task} isUpdateTask={isUpdateTask} />
                <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
            </StyledPaper>
        </Container>
    );
};

export default Dashboard;
