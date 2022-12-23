import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { shallow } from 'enzyme';
import PostDetail from '../components/PostDetail/Component';
import LoadingIndicatorBox from '../components/shared/LoadingIndicator/Box';
import PostDetailPost from '../components/PostDetail/Post';
import PostDetailCommentSection from '../components/PostDetail/CommentSection';
import Empty from '../components/shared/Empty';

it('renders without crashing', () => {
  // @ts-expect-error TS(2769): No overload matches this call
  shallow(<PostDetail fetchPost={(fn: any) => fn} />);
});

it('renders a post and its comment section', () => {
  // @ts-expect-error TS(2769): No overload matches this call
  const wrapper = shallow(<PostDetail fetchPost={(fn: any) => fn} post />);
  expect(wrapper.contains(<PostDetailPost />)).toEqual(true);
  expect(wrapper.contains(<PostDetailCommentSection />)).toEqual(true);
});

it('renders a loading indicator while fetching', () => {
  const wrapper = shallow(
    // @ts-expect-error TS(2769): No overload matches this call
    <PostDetail fetchPost={(fn: any) => fn} isFetching />
  );
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true);
});

it("renders a message when the post doesn't exist", () => {
  // @ts-expect-error TS(2769): No overload matches this call
  const wrapper = shallow(<PostDetail fetchPost={(fn: any) => fn} />);
  expect(wrapper.contains(<Empty />)).toEqual(true);
});
