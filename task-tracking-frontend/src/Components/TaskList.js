import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from the backend using Axios.
        axios.get('/api/tasks')
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    {/* Display other task details */}
                </div>
            ))}
        </div>
    );
}

export default TaskList;
