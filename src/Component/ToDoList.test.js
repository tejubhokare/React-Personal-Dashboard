
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../components/ToDoList';

describe('ToDoList Component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<ToDoList />);
    expect(getByText('To-Do List')).toBeInTheDocument();
  });

  test('add new task button toggles form visibility', () => {
    const { getByText, getByTestId } = render(<ToDoList />);
    const addButton = getByText('Add New Task');
    fireEvent.click(addButton);
    const form = getByTestId('add-task-form');
    expect(form).toBeInTheDocument();
  });

})