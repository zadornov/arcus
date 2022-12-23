import React from 'react';
import styled from 'styled-components/macro';
import PostListItem from './Item';
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';

const List = styled.ul`
  list-style: none;
  border: 1px solid ${(props: any) => props.theme.border};
  border-radius: 2px;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

class PostList extends React.Component {
  loadPosts = () => {
    // @ts-expect-error TS(2339) FIXME: Property 'username' does not exist on type 'Readon... Remove this comment to see the full error message
    const { username, category } = this.props;
    // @ts-expect-error TS(2339) FIXME: Property 'fetchProfile' does not exist on type 'Re... Remove this comment to see the full error message
    if (username) return this.props.fetchProfile(username);
    // @ts-expect-error TS(2339) FIXME: Property 'fetchPosts' does not exist on type 'Read... Remove this comment to see the full error message
    return this.props.fetchPosts(category);
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if (
      // @ts-expect-error TS(2339) FIXME: Property 'category' does not exist on type 'Readon... Remove this comment to see the full error message
      this.props.category !== prevProps.category ||
      // @ts-expect-error TS(2339) FIXME: Property 'username' does not exist on type 'Readon... Remove this comment to see the full error message
      this.props.username !== prevProps.username
    )
      this.loadPosts();
  }

  mapPosts = () =>
    // @ts-expect-error TS(2339) FIXME: Property 'posts' does not exist on type 'Readonly<... Remove this comment to see the full error message
    this.props.posts.map((post: any, index: any) => (
      <PostListItem key={index} {...post} />
    ));

  render() {
    // @ts-expect-error TS(2339) FIXME: Property 'isFetching' does not exist on type 'Read... Remove this comment to see the full error message
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    // @ts-expect-error TS(2339) FIXME: Property 'posts' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (!this.props.posts || this.props.posts.length === 0) return <Empty />;
    return <List>{this.mapPosts()}</List>;
  }
}

export default PostList;
