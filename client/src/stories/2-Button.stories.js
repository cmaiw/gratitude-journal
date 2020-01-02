import React from 'react';
import NavButton from '../components/NavButton';
import { action } from '@storybook/addon-actions';
import BirdIcon from '../icons/BirdIcon';

export default {
  title: 'Navigation Button'
};

export function NavButtonBird() {
  return (
    <NavButton onClick={action('clicked')} onMouseover={action('hover')}>
      <BirdIcon />
    </NavButton>
  );
}
