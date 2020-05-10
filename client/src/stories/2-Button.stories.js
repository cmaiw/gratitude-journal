import React from 'react';
import UniversalButton from '../components/UniversalButton';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Universal Button (edit, back, delete, submit)'
};

const info = 'edit';

export function MyUniversalButton() {
  return (
    <UniversalButton
      onClick={action('clicked')}
      text={text('Button Label', 'edit')}
      onMouseover={action('hover')}
    >
      {info}
    </UniversalButton>
  );
}
