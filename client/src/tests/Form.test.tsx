import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import Form from '../components/shared/form/Form';

it('renders without crashing', () => {
  shallow(<Form />);
});

it('renders a loading indicator', () => {
  const wrapper = shallow(<Form loading />);
  expect(wrapper.find('Spinner__LoadingIndicatorSpinner')).toHaveLength(1);
});
