import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../components/SignupForm/Component';

it('renders without crashing', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  shallow(<SignupForm handleSubmit={(fn: any) => fn} />);
});
