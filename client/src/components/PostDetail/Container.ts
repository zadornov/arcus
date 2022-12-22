import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../util/withAuth';
import { fetchPost } from '../../actions/posts';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import PostDetail from './Component';

export const mapStateToProps = (state: any) => ({
  isFetching: state.posts.isFetching,
  post: state.posts.post,
});

const mapDispatchToProps = { fetchPost };

const enhance = compose(withAuth, connect(mapStateToProps, mapDispatchToProps));

const PostDetailContainer = enhance(PostDetail);

export default PostDetailContainer;
