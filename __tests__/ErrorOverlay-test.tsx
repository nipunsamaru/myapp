import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorOverlay from '../src/components/ui/ErrorOverlay';

describe('ErrorOverlay component', () => {
  it('renders correctly with provided message', () => {
    const errorMessage = 'Something went wrong';
    const {getByText} = render(<ErrorOverlay message={errorMessage} />);
    expect(getByText('An error occurred!')).toBeTruthy();
    expect(getByText(errorMessage)).toBeTruthy();
  });

  // Add more test cases as needed
});
