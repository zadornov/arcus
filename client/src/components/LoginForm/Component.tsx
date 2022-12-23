import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import { usernameValidator, passwordValidator } from '../../util/validators';
import SubmitButton from '../shared/form/SubmitButton';

class LoginForm extends React.Component {
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
    // @ts-expect-error TS(2339): Property 'attemptLogin' does not exist on type 'Re... Remove this comment to see the full error message
    this.props.attemptLogin(username, password);
  };

  render() {
    return (
      <Form
        // @ts-expect-error TS(2339): Property 'loading' does not exist on type 'Readonl... Remove this comment to see the full error message
        loading={this.props.loading}
        // @ts-expect-error TS(2339): Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
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
        <SubmitButton type='submit'>log in</SubmitButton>
      </Form>
    );
  }
}

export default LoginForm;
