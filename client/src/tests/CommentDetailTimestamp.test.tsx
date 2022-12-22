import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import moment from 'moment';
// @ts-expect-error TS(6142): Module '../components/Comment/Detail/Timestamp' wa... Remove this comment to see the full error message
import CommentDetailTimestamp from '../components/Comment/Detail/Timestamp';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<CommentDetailTimestamp />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a relative timestamp', () => {
  const timestamp = '2018-11-05T05:02:38.544Z';
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<CommentDetailTimestamp created={timestamp} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.text()).toEqual(moment(timestamp).fromNow());
});
