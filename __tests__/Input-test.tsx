import React from 'react';
import {Text, View} from 'react-native';
import renderer from 'react-test-renderer';
import Input from '../src/components/managetasks/Input';
import {Colors} from '../src/constants/style';

describe('Input component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input label="Test Label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders label correctly', () => {
    const label = 'Test Label';
    const component = renderer.create(<Input label={label} />);
    const root = component.root;
    const textInstance = root.findByType(Text);
    expect(textInstance.props.children).toEqual(label);
  });

  // Add more test cases as needed
});
