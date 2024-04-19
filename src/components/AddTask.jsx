import React from 'react';
import '../styles/AddTask.css'

function AddTask({ showForm, toggleForm, newTask, handleInputChange, handleFormSubmit, handleCancel }) {

    return (
        showForm && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={toggleForm}>&times;</span>
                    <h3>Add New Task</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="task">Task Name:</label>
                            <input type="text" name="task" id="task" value={newTask.task} onChange={handleInputChange} placeholder="Task Name" />
                        </div>
                        <div>
                            <label htmlFor="task">Description:</label>
                            <textarea type="text" name="description" id="description" value={newTask.description} onChange={handleInputChange} placeholder="Description" />
                        </div>
                        <div>
                            <label htmlFor="priority">Priority:</label>
                            <select name="priority" id="priority" value={newTask.priority} onChange={handleInputChange}>
                                <option value="">Select Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="buttons">
                            <button type="submit">Add Task</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default AddTask;
