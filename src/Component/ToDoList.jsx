// components/TodoList.js
import React, { useState } from 'react';
import '../Styles/ToDoList.css';
import AddTask from './AddTask';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState({ task: '', description: '', priority: '', completed: false });

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newTask.task.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask({ task: '', description: '', priority: '', completed: false });
            setShowForm(false);
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleCancel = () => {
        setNewTask({ task: '', description: '', priority: '', completed: false });
        setShowForm(false);
    };

    return (
        <div className="todo-list">
            <h2>To-Do List</h2>
            <button className="add-task-button" onClick={toggleForm}>Add New Task</button>
            <AddTask
                showForm={showForm}
                toggleForm={toggleForm}
                newTask={newTask}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                handleCancel={handleCancel}
            />
            <div className="task-cards">
                {tasks.map((task, index) => (
                    <div key={index} className="task-card">
                        <input type="checkbox" checked={task.completed} onChange={() => {
                            const updatedTasks = [...tasks];
                            updatedTasks[index].completed = !updatedTasks[index].completed;
                            setTasks(updatedTasks);
                        }} />
                        <div className="task-info">
                            <h3>{task.task}</h3>
                            <p>Priority: {task.priority}</p>
                            <p>Description: {task.description}</p>
                        </div>
                        <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
