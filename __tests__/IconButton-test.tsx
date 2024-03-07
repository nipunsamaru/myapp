import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import IconButton from '../src/components/ui/IconButton';

describe('IconButton component', () => {
  it('renders correctly with provided icon', () => {
    const {getByTestId} = render(
      <IconButton icon="ios-add" color="black" size={20} onPress={() => {}} />,
    );
    expect(getByTestId('icon-button')).toBeTruthy();
  });

  // Add more test cases as needed
});
