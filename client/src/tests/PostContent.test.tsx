import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/Post/Content' was resolved t... Remove this comment to see the full error message
import PostContent from '../components/Post/Content';
// @ts-expect-error TS(6142): Module '../components/Post/Content/Title' was reso... Remove this comment to see the full error message
import PostContentTitle from '../components/Post/Content/Title';
import PostContentPreview from '../components/Post/Content/Preview';
// @ts-expect-error TS(6142): Module '../components/Post/Content/Detail' was res... Remove this comment to see the full error message
import PostContentDetail from '../components/Post/Content/Detail';
// @ts-expect-error TS(6142): Module '../components/Post/Content/FullText' was r... Remove this comment to see the full error message
import PostContentFullText from '../components/Post/Content/FullText';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostContent />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("renders the post's title, content preview, and details", () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostContent type='link' />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find(PostContentTitle).exists()).toEqual(true);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find(PostContentPreview).exists()).toEqual(true);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<PostContentDetail />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders the full text of a text post', () => {
  const text = 'example test post';
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostContent type='text' text={text} showFullPost />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find(PostContentFullText).exists()).toEqual(true);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.find(PostContentFullText).children().text()).toEqual(text);
});
