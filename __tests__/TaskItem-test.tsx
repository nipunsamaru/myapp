import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import TaskItem from '../src/components/taskoutput/TaskItem';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('TaskItem component', () => {
  beforeEach(() => {
    useNavigation.mockReturnValue({navigate: jest.fn()});
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <TaskItem id="1" taskName="Task Name" date={new Date()} />,
    );
    expect(getByText('Task Name')).toBeTruthy();
  });

  it('navigates to ManageTask screen when pressed', () => {
    const {getByText} = render(
      <TaskItem id="1" taskName="Task Name" date={new Date()} />,
    );
    fireEvent.press(getByText('Task Name'));
    expect(useNavigation().navigate).toHaveBeenCalledWith('ManageTask', {
      taskId: '1',
    });
  });

  // Add more test cases as needed
});
