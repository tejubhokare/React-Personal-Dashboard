
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../redux/actions';
import '../Styles/ToDoList.css';
import AddTask from './AddTask';

function ToDoList({ tasks, addTask, deleteTask, toggleTask }) {
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({ task: '', description: '', priority: '', completed: false });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.task.trim() !== '') {
      addTask(newTask);
      setNewTask({ task: '', description: '', priority: '', completed: false });
      setShowForm(false);
    }
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
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
      <button className="add-task-button" onClick={toggleForm}>
        Add New Task
      </button>
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
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                toggleTask(index);
              }}
            />
            <div className="task-info">
              <h3>{task.task}</h3>
              <p>Description: {task.description}</p>
              <p>Priority: {task.priority}</p>            </div>
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  toggleTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
