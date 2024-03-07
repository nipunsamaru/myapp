import React from 'react';
import {render} from '@testing-library/react-native';
import TasksList from '../src/components/taskoutput/TasksList';

describe('TasksList component', () => {
  it('renders correctly', () => {
    const tasks = [
      {id: '1', taskName: 'Task 1', date: new Date('2024-03-07')},
      {id: '2', taskName: 'Task 2', date: new Date('2024-03-08')},
      // Add more task items if needed
    ];

    const {getByText} = render(<TasksList tasks={tasks} />);

    // Check if each task is rendered correctly
    expect(getByText('Task 1')).toBeTruthy();
    expect(getByText('Task 2')).toBeTruthy();
    // Add more assertions if needed
  });
});
