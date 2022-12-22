import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../util/withAuth';
import { attemptDeletePost } from '../../../actions/posts';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import PostDetailInfoBar from './Component';

const mapDispatchToProps = { attemptDeletePost };

const enhance = compose(withAuth, connect(null, mapDispatchToProps));

const PostDetailInfoBarContainer = enhance(PostDetailInfoBar);

export default PostDetailInfoBarContainer;
