import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FlatButton from '../src/components/ui/FlatButton';

describe('FlatButton component', () => {
  it('renders correctly with provided text', () => {
    const {getByText} = render(
      <FlatButton onPress={() => {}}>Press Me</FlatButton>,
    );
    expect(getByText('Press Me')).toBeTruthy();
  });

  it('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <FlatButton onPress={onPressMock}>Press Me</FlatButton>,
    );
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
