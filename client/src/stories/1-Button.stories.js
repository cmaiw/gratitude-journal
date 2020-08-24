import React from 'react';
import UniversalButton from '../components/UniversalButton';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Universal Button (edit, back, delete, submit)'
};

let info = 'Click!' || text;

export function AUniversalButton() {
  return (
    <UniversalButton
      onClick={action('clicked')}
      text={text('Button', 'Click')}
      onMouseover={action('hover')}
    >
      {info}
    </UniversalButton>
  );
}
