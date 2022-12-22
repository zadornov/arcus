import { connect } from 'react-redux';
import { compose } from 'redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import { attemptSignup } from '../../actions/auth';
import validate from './validate';
// @ts-expect-error TS(6142): Module './Component' was resolved to '/home/zadorn... Remove this comment to see the full error message
import SignupForm from './Component';

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = { attemptSignup };

const enhance = compose(
  reduxForm({ form: 'signup', validate }),
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
);

const SignupFormContainer = enhance(SignupForm);

export default SignupFormContainer;
