import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import Home from '../components/Home';

it('renders without crashing', () => {
  shallow(<Home />);
});
