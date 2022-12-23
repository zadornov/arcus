import React from 'react';
import { shallow } from 'enzyme';
import CommentForm from '../components/CommentForm/Component';

it('renders without crashing', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  shallow(<CommentForm handleSubmit={(fn: any) => fn} />);
});
