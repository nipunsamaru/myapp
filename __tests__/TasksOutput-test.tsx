import React from 'react';
import {render} from '@testing-library/react-native';
import TasksOutput from '../src/components/taskoutput/TasksOutput';

describe('TasksOutput component', () => {
  it('renders fallback text when no tasks provided', () => {
    const {getByText} = render(
      <TasksOutput
        tasks={[]}
        description="Description"
        fallbackText="No tasks found"
      />,
    );
    expect(getByText('No tasks found')).toBeTruthy();
  });

  it('renders TasksList when tasks are provided', () => {
    const tasks = [
      {id: '1', taskName: 'Task 1', date: new Date('2024-03-07')},
      {id: '2', taskName: 'Task 2', date: new Date('2024-03-08')},
      // Add more task items if needed
    ];

    const {getByText} = render(
      <TasksOutput
        tasks={tasks}
        description="Description"
        fallbackText="No tasks found"
      />,
    );
    expect(getByText('Task 1')).toBeTruthy();
    expect(getByText('Task 2')).toBeTruthy();
  });

  // Add more test cases as needed
});
