import React from 'react';
// import { action } from '@storybook/addon-actions';
import NavButton from '../components/NavButton';
import BirdIcon from '../icons/BirdIcon';

export default {
  title: 'NavButton'
};

export function NavButtonJournal() {
  return (
    <NavButton>
      <BirdIcon />
    </NavButton>
  );
}
