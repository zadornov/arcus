import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuth from '../../../util/withAuth';
import { attemptDeleteComment } from '../../../actions/posts';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import CommentDetail from './Component';

const mapDispatchToProps = { attemptDeleteComment };

const enhance = compose(withAuth, connect(null, mapDispatchToProps));

const CommentDetailContainer = enhance(CommentDetail);

export default CommentDetailContainer;
