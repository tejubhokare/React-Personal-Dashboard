import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTask from './AddTask';

describe('AddTask component', () => {
    const mockToggleForm = jest.fn();
    const mockHandleInputChange = jest.fn();
    const mockHandleFormSubmit = jest.fn();
    const mockHandleCancel = jest.fn();

    const mockNewTask = {
        task: 'Test Task',
        description: 'Test Description',
        priority: 'High'
    };

    it('renders form elements and handles form submission', () => {
        const { getByLabelText, getByText } = render(
            <AddTask
                showForm={true}
                toggleForm={mockToggleForm}
                newTask={mockNewTask}
                handleInputChange={mockHandleInputChange}
                handleFormSubmit={mockHandleFormSubmit}
                handleCancel={mockHandleCancel}
            />
        );

        const taskInput = getByLabelText('Task Name:');
        const descriptionTextarea = getByLabelText('Description:');
        const prioritySelect = getByLabelText('Priority:');
        const addTaskButton = getByText('Add Task');
        const cancelButton = getByText('Cancel');

        fireEvent.change(taskInput, { target: { value: 'Updated Task Name' } });
        fireEvent.change(descriptionTextarea, { target: { value: 'Updated Description' } });
        fireEvent.change(prioritySelect, { target: { value: 'Medium' } });


        fireEvent.submit(getByText('Add Task'));

        expect(mockHandleInputChange).toHaveBeenCalledTimes(3);
        expect(mockHandleInputChange).toHaveBeenCalledWith(expect.any(Object));
        expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);

        fireEvent.click(cancelButton);

        expect(mockHandleCancel).toHaveBeenCalledTimes(1);
    });
});
