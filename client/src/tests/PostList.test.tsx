import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../components/PostList/Component';
import PostListItem from '../components/PostList/Item';
import Empty from '../components/shared/Empty';
import LoadingIndicatorBox from '../components/shared/LoadingIndicator/Box';

it('renders without crashing', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  shallow(<PostList fetchPosts={(fn: any) => fn} />);
});

it('renders a list of posts', () => {
  const posts = [{}, {}, {}];
  const wrapper = shallow(
    // @ts-expect-error TS(2769) FIXME: No overload matches this call.
    <PostList fetchPosts={(fn: any) => fn} posts={posts} />
  );
  expect(wrapper.children()).toHaveLength(posts.length);
  expect(wrapper.contains(<PostListItem />)).toEqual(true);
});

it('renders a loading indicator while fetching', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  const wrapper = shallow(<PostList fetchPosts={(fn: any) => fn} isFetching />);
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true);
});

it('renders a message when there are no posts', () => {
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  const wrapper = shallow(<PostList fetchPosts={(fn: any) => fn} />);
  expect(wrapper.contains(<Empty />)).toEqual(true);
});
