import React, { useState } from 'react';
import axios from 'axios';

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        // Add other task fields here
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send a POST request to create a new task in the backend using Axios.
        axios.post('/api/tasks', task)
            .then((response) => {
                console.log('Task created:', response.data);
            })
            .catch((error) => {
                console.error('Error creating task:', error);
            });
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={task.description}
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                />
                {/* Add input fields for other task properties */}
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
}

export default TaskForm;
