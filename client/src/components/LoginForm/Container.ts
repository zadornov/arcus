import { connect } from 'react-redux';
import { compose } from 'redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { reduxForm } from 'redux-form';
import withAuth from '../../util/withAuth';
import { attemptLogin } from '../../actions/auth';
import LoginForm from './Component';

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = { attemptLogin };

const enhance = compose(
  reduxForm({ form: 'login' }),
  withAuth,
  connect(mapStateToProps, mapDispatchToProps)
);

const LoginFormContainer = enhance(LoginForm);

export default LoginFormContainer;
