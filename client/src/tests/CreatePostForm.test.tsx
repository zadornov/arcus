import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import CreatePostForm from '../components/CreatePostForm/Component';

it('renders without crashing', () => {
  const form = { values: {} };
  // @ts-expect-error TS(2769): No overload matches this call
  shallow(<CreatePostForm handleSubmit={(fn: any) => fn} form={form} />);
});
