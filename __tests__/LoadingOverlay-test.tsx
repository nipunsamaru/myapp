import React from 'react';
import {render} from '@testing-library/react-native';
import LoadingOverlay from '../src/components/ui/LoadingOverlay';

describe('LoadingOverlay component', () => {
  it('renders correctly with provided message', () => {
    const loadingMessage = 'Loading...';
    const {getByText, getByTestId} = render(
      <LoadingOverlay message={loadingMessage} />,
    );
    expect(getByText(loadingMessage)).toBeTruthy();
  });

  // Add more test cases as needed
});
