import React from 'react';
import UniversalButton from '../components/UniversalButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Universal Button (edit, back, delete, submit)',
  argTypes: {
    label: { control: 'text' }
  }
};

export const Basic = args => {
  let child = args.label;
  return (
    <UniversalButton onClick={action('You clicked the Universal Button!')}>{child}</UniversalButton>
  );
};
Basic.args = {
  label: 'Click me!'
};
