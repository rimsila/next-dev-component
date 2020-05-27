// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import NextButton from './index';
import { NextButtonProps } from './NextButton.types';

describe('Test Component', () => {
  let props: NextButtonProps;

  beforeEach(() => {
    props = {
      label: 'bar',
      cusClass: 'cusClass',
    };
  });

  const renderComponent = () => render(<NextButton {...props} />);

  it('should render label text correctly', () => {
    props.label = 'label was here';
    const { getByTestId } = renderComponent();
    const component = getByTestId('NextButton');
    expect(component).toHaveTextContent('label was here');
  });
});
