import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error TS(6142): Module '../components/PostList/Component' was reso... Remove this comment to see the full error message
import PostList from '../components/PostList/Component';
// @ts-expect-error TS(6142): Module '../components/PostList/Item' was resolved ... Remove this comment to see the full error message
import PostListItem from '../components/PostList/Item';
// @ts-expect-error TS(6142): Module '../components/shared/Empty' was resolved t... Remove this comment to see the full error message
import Empty from '../components/shared/Empty';
// @ts-expect-error TS(6142): Module '../components/shared/LoadingIndicator/Box'... Remove this comment to see the full error message
import LoadingIndicatorBox from '../components/shared/LoadingIndicator/Box';

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  shallow(<PostList fetchPosts={(fn: any) => fn} />);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a list of posts', () => {
  const posts = [{}, {}, {}];
  const wrapper = shallow(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PostList fetchPosts={(fn: any) => fn} posts={posts} />
  );
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.children()).toHaveLength(posts.length);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<PostListItem />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a loading indicator while fetching', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostList fetchPosts={(fn: any) => fn} isFetching />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true);
});

// @ts-expect-error TS(2582): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders a message when there are no posts', () => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const wrapper = shallow(<PostList fetchPosts={(fn: any) => fn} />);
  // @ts-expect-error TS(2304): Cannot find name 'expect'.
  expect(wrapper.contains(<Empty />)).toEqual(true);
});
