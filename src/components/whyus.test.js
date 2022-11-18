import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import WhyUs from './landingPages/whyUs';
import '@testing-library/jest-dom';
import React from 'react';

test('should render Why US component', () => {
  const linkElement = Renderer.create(<WhyUs />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});

