import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import Testimoni from './landingPages/testimoni';
import '@testing-library/jest-dom';
import React from 'react';


test('should render footer component', () => {
  const linkElement = Renderer.create(<Testimoni />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});
