import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import CommentList from '../components/CommentList';

it('renders without crashing', () => {
  shallow(<CommentList />);
});

it('render a list of comments', () => {
  const comments = [{}, {}, {}];
  const wrapper = shallow(<CommentList comments={comments} />);
  expect(wrapper.children()).toHaveLength(comments.length);
});
