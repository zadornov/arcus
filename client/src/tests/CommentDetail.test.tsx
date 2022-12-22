import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/Comment/Detail/Component' wa... Remove this comment to see the full error message
import CommentDetail from '../components/Comment/Detail/Component';
// @ts-expect-error TS(6142): Module '../components/shared/Author' was resolved ... Remove this comment to see the full error message
import Author from '../components/shared/Author';
// @ts-expect-error TS(6142): Module '../components/Comment/Detail/Timestamp' wa... Remove this comment to see the full error message
import CommentDetailTimestamp from '../components/Comment/Detail/Timestamp';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<CommentDetail author />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders the author', () => {
  const username = 'deniz';
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<CommentDetail author={{ username }} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<Author username={username} />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders the timestamp', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<CommentDetail author />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<CommentDetailTimestamp />)).toEqual(true);
});
