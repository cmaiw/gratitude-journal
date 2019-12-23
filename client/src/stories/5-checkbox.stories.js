import React from 'react';
import FavCheckbox from '../components/FavCheckbox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Favourite Checkbox'
};

export function FavouriteCheckbox() {
  return <FavCheckbox onClick={action('checked')} />;
}
