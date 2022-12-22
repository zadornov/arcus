import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../util/withAuth';
import { attemptVote } from '../../../actions/posts';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import PostVote from './Component';

const mapDispatchToProps = { attemptVote };

const enhance = compose(withAuth, connect(null, mapDispatchToProps));

const PostVoteContainer = enhance(PostVote);

export default PostVoteContainer;
