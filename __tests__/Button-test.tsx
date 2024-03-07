import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../src/components/ui/Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Button onPress={() => {}} mode="raised">
        Press Me
      </Button>,
    );
    expect(getByText('Press Me')).toBeTruthy();
  });

  it('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button onPress={onPressMock} mode="raised">
        Press Me
      </Button>,
    );
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
