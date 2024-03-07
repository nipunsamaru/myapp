import React from 'react';
import renderer from 'react-test-renderer';
import TasksForm from '../src/components/managetasks/TasksForm';

describe('TasksForm component', () => {
  it('renders correctly', () => {
    const submitButtonLabel = 'Submit';
    const onCancel = jest.fn();
    const onSubmit = jest.fn();
    const defaultValues = {
      taskName: '',
      date: new Date(),
      description: '',
    };

    const tree = renderer
      .create(
        <TasksForm
          submitButtonLabel={submitButtonLabel}
          onCancel={onCancel}
          onSubmit={onSubmit}
          defaultValues={defaultValues}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Add more test cases as needed
});
