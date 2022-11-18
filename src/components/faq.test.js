import * as Renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import FAQ from './landingPages/faq';
import '@testing-library/jest-dom';
import React from 'react';


test('should render FAQ component', () => {
  const linkElement = Renderer.create(<FAQ />);
  waitFor(() => expect(linkElement).toBeInTheDocument());
});