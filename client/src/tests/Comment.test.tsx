import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/Comment' was resolved to '/h... Remove this comment to see the full error message
import Comment from '../components/Comment';
import CommentDetailContainer from '../components/Comment/Detail/Container';
// @ts-expect-error TS(6142): Module '../components/Comment/Content' was resolve... Remove this comment to see the full error message
import CommentContent from '../components/Comment/Content';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<Comment />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders details about the comment', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Comment />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<CommentDetailContainer />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("renders the comment's content", () => {
  const comment = 'test comment';
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<Comment body={comment} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find(CommentContent).exists()).toEqual(true);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find(CommentContent).children().text()).toEqual(comment);
});
