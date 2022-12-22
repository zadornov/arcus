import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/PostDetail/CommentSection' w... Remove this comment to see the full error message
import PostDetailCommentSection from '../components/PostDetail/CommentSection';
// @ts-expect-error TS(6142): Module '../components/CommentList' was resolved to... Remove this comment to see the full error message
import CommentList from '../components/CommentList';
// @ts-expect-error TS(6142): Module '../components/shared/Empty' was resolved t... Remove this comment to see the full error message
import Empty from '../components/shared/Empty';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostDetailCommentSection post />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a list of comments', () => {
  const comments = [{}];
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetailCommentSection comments={comments} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<CommentList comments={comments} />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a message when there are no comments', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetailCommentSection post />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<Empty comments />)).toEqual(true);
});
