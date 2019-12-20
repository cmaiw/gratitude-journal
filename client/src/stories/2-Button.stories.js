import React from 'react';
import NavButton from '../components/NavButton';
import BirdIcon from '../icons/BirdIcon';

export default {
  title: 'Navigation Button'
};

export function NavButtonBird() {
  return (
    <NavButton>
      <BirdIcon />
    </NavButton>
  );
}
