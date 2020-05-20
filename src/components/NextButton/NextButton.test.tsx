// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import NextButton from './NextButton';
import { NextButtonProps } from './NextButton.types';

describe('Test Component', () => {
  let props: NextButtonProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<NextButton {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();

    const component = getByTestId('NextButton');

    expect(component).toHaveTextContent('harvey was here');
  });
});
