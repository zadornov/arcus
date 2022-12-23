import React from 'react';
import { shallow } from 'enzyme';
import CommentDetail from '../components/Comment/Detail/Component';
import Author from '../components/shared/Author';
import CommentDetailTimestamp from '../components/Comment/Detail/Timestamp';

it('renders without crashing', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  shallow(<CommentDetail author />);
});

it('renders the author', () => {
  const username = 'deniz';
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  const wrapper = shallow(<CommentDetail author={{ username }} />);
  expect(wrapper.contains(<Author username={username} />)).toEqual(true);
});

it('renders the timestamp', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  const wrapper = shallow(<CommentDetail author />);
  expect(wrapper.contains(<CommentDetailTimestamp />)).toEqual(true);
});
