import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/PostDetail/Component' was re... Remove this comment to see the full error message
import PostDetail from '../components/PostDetail/Component';
// @ts-expect-error TS(6142): Module '../components/shared/LoadingIndicator/Box'... Remove this comment to see the full error message
import LoadingIndicatorBox from '../components/shared/LoadingIndicator/Box';
// @ts-expect-error TS(6142): Module '../components/PostDetail/Post' was resolve... Remove this comment to see the full error message
import PostDetailPost from '../components/PostDetail/Post';
// @ts-expect-error TS(6142): Module '../components/PostDetail/CommentSection' w... Remove this comment to see the full error message
import PostDetailCommentSection from '../components/PostDetail/CommentSection';
// @ts-expect-error TS(6142): Module '../components/shared/Empty' was resolved t... Remove this comment to see the full error message
import Empty from '../components/shared/Empty';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostDetail fetchPost={(fn: any) => fn} />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a post and its comment section', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetail fetchPost={(fn: any) => fn} post />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<PostDetailPost />)).toEqual(true);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<PostDetailCommentSection />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a loading indicator while fetching', () => {
  const wrapper = shallow(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PostDetail fetchPost={(fn: any) => fn} isFetching />
  );
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it("renders a message when the post doesn't exist", () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostDetail fetchPost={(fn: any) => fn} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<Empty />)).toEqual(true);
});
