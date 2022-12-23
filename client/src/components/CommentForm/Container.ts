import { connect } from 'react-redux';
import { compose } from 'redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { reduxForm } from 'redux-form';
import { attemptCreateComment } from '../../actions/posts';
import CommentForm from './Component';

const mapDispatchToProps = { attemptCreateComment };

const enhance = compose(
  reduxForm({ form: 'comment' }),
  connect(null, mapDispatchToProps)
);

const CommentFormContainer = enhance(CommentForm);

export default CommentFormContainer;
