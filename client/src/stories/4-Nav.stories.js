import React from 'react';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Nav Bar'
};

export function Navigation() {
  return (
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
}
