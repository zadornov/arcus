import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import { attemptSignup } from '../../actions/auth';
import validate from './validate';
import SignupForm from './Component';

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = { attemptSignup };

const enhance = compose(
  // @ts-expect-error TS(2769) FIXME: No overload matches this call.
  reduxForm({ form: 'signup', validate }),
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
);

const SignupFormContainer = enhance(SignupForm);

export default SignupFormContainer;
