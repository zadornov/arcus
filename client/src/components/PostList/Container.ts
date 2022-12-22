import { connect } from 'react-redux';
import { fetchPosts, fetchProfile } from '../../actions/posts';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import PostList from './Component';

export const mapStateToProps = (state: any) => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching,
});

const mapDispatchToProps = { fetchPosts, fetchProfile };

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
