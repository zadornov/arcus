import React from 'react';
import { shallow } from 'enzyme';
import CreatePostForm from '../components/CreatePostForm/Component';

it('renders without crashing', () => {
  const form = { values: {} };
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  shallow(<CreatePostForm handleSubmit={(fn: any) => fn} form={form} />);
});
