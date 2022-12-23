import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../components/LoginForm/Component';

it('renders without crashing', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  shallow(<LoginForm handleSubmit={(fn: any) => fn} />);
});
