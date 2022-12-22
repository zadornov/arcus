import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module './Item' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import PostListItem from './Item';
// @ts-expect-error TS(6142): Module '../shared/LoadingIndicator/Box' was resolv... Remove this comment to see the full error message
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
// @ts-expect-error TS(6142): Module '../shared/Empty' was resolved to '/home/za... Remove this comment to see the full error message
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
    // @ts-expect-error TS(2339): Property 'username' does not exist on type 'Readon... Remove this comment to see the full error message
    const { username, category } = this.props;
    // @ts-expect-error TS(2339): Property 'fetchProfile' does not exist on type 'Re... Remove this comment to see the full error message
    if (username) return this.props.fetchProfile(username);
    // @ts-expect-error TS(2339): Property 'fetchPosts' does not exist on type 'Read... Remove this comment to see the full error message
    return this.props.fetchPosts(category);
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if (
      // @ts-expect-error TS(2339): Property 'category' does not exist on type 'Readon... Remove this comment to see the full error message
      this.props.category !== prevProps.category ||
      // @ts-expect-error TS(2339): Property 'username' does not exist on type 'Readon... Remove this comment to see the full error message
      this.props.username !== prevProps.username
    )
      this.loadPosts();
  }

  mapPosts = () =>
    // @ts-expect-error TS(2339): Property 'posts' does not exist on type 'Readonly<... Remove this comment to see the full error message
    this.props.posts.map((post: any, index: any) => (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PostListItem key={index} {...post} />
    ));

  render() {
    // @ts-expect-error TS(2339): Property 'isFetching' does not exist on type 'Read... Remove this comment to see the full error message
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    // @ts-expect-error TS(2339): Property 'posts' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (!this.props.posts || this.props.posts.length === 0) return <Empty />;
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <List>{this.mapPosts()}</List>;
  }
}

export default PostList;
