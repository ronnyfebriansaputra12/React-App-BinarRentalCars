import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Sewa from './landingPages/sewa';
import '@testing-library/jest-dom';
import React from 'react';


test('should render Why US component', () => {
  const linkElement = Renderer.create(<Sewa />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
