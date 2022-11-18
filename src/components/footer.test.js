import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Footer from './landingPages/footer';
import '@testing-library/jest-dom';
import React from 'react';


test('should render Footer component', () => {
  const linkElement = Renderer.create(<Footer />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});