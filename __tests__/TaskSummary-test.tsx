import React from 'react';
import {render} from '@testing-library/react-native';
import TasksSummary from '../src/components/taskoutput/TasksSummary';

describe('TasksSummary component', () => {
  it('renders correctly with provided description', () => {
    const description = 'Summary description';
    const {getByText} = render(<TasksSummary description={description} />);
    expect(getByText(description)).toBeTruthy();
  });

  // Add more test cases as needed
});
