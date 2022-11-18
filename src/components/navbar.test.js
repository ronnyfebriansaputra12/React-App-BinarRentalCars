import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Navbar from './landingPages/navbar';
import '@testing-library/jest-dom';
import React from 'react';

test('should render footer component', () => {
  const linkElement = Renderer.create(<Navbar />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
