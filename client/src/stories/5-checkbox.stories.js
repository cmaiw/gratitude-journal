import React from 'react';
import FavCheckbox from '../components/FavCheckbox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Favourites Checkbox'
};

export function FavouritesCheckbox() {
  return <FavCheckbox onClick={action('setChecked')} />;
}
