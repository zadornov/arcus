import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field } from 'redux-form';
// @ts-expect-error TS(6142): Module '../shared/form/Form' was resolved to '/hom... Remove this comment to see the full error message
import Form from '../shared/form/Form';
// @ts-expect-error TS(6142): Module '../shared/form/renderField' was resolved t... Remove this comment to see the full error message
import renderField from '../shared/form/renderField';
import { usernameValidator, passwordValidator } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';

class SignupForm extends React.Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    // @ts-expect-error TS(2339): Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (this.props.token) this.props.history.push('/');
  }

  onSubmit = ({ username, password }: any) => {
    // @ts-expect-error TS(2339): Property 'attemptSignup' does not exist on type 'R... Remove this comment to see the full error message
    this.props.attemptSignup(username, password);
  };

  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form
        // @ts-expect-error TS(2339): Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
        loading={this.props.loading}
        // @ts-expect-error TS(2339): Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Field
          name='username'
          label='username'
          type='text'
          component={renderField}
          validate={usernameValidator}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Field
          name='password'
          label='password'
          type='password'
          component={renderField}
          validate={passwordValidator}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Field
          name='password2'
          label='confirm password'
          type='password'
          component={renderField}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <SubmitButton type='submit'>sign up</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;
