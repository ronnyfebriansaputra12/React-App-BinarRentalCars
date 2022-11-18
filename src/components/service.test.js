import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Service from './landingPages/service';
import '@testing-library/jest-dom';
import React from 'react';


test('should render footer component', () => {
  const linkElement = Renderer.create(<Service />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
