import React from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
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
    // @ts-expect-error TS(2339) FIXME: Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (this.props.token) this.props.history.push('/');
  }

  onSubmit = ({ username, password }: any) => {
    // @ts-expect-error TS(2339) FIXME: Property 'attemptSignup' does not exist on type 'R... Remove this comment to see the full error message
    this.props.attemptSignup(username, password);
  };

  render() {
    return (
      <Form
        // @ts-expect-error TS(2339) FIXME: Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
        loading={this.props.loading}
        // @ts-expect-error TS(2339) FIXME: Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name='username'
          label='username'
          type='text'
          component={renderField}
          validate={usernameValidator}
        />
        <Field
          name='password'
          label='password'
          type='password'
          component={renderField}
          validate={passwordValidator}
        />
        <Field
          name='password2'
          label='confirm password'
          type='password'
          component={renderField}
        />
        <SubmitButton type='submit'>sign up</SubmitButton>
      </Form>
    );
  }
}

export default SignupForm;
