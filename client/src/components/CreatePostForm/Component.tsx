import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field } from 'redux-form';
import categories from '../../categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const postTypes = [
  {
    label: 'link',
    value: 'link',
  },
  {
    label: 'text',
    value: 'text',
  },
];

class CreatePostForm extends React.Component {
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    // @ts-expect-error TS(2339): Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  // @ts-expect-error TS(2339): Property 'attemptCreatePost' does not exist on typ... Remove this comment to see the full error message
  onSubmit = (post: any) => this.props.attemptCreatePost(post);

  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    return (
      <Form
        // @ts-expect-error TS(2339): Property 'isFetching' does not exist on type 'Read... Remove this comment to see the full error message
        loading={this.props.isFetching}
        // @ts-expect-error TS(2339): Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name='type'
          label='type'
          type='radiogroup'
          component={renderField}
          options={postTypes}
        />
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field name='title' label='title' type='text' component={renderField} />
        {
        // @ts-expect-error TS(2339): Property 'form' does not exist on type 'Readonly<{... Remove this comment to see the full error message
          this.props.form.values.type === 'link' && (
          <Field name='url' label='url' type='url' component={renderField} />
        )}
        {
        // @ts-expect-error TS(2339): Property 'form' does not exist on type 'Readonly<{... Remove this comment to see the full error message
          this.props.form.values.type === 'text' && (
          <Field
            name='text'
            label='text'
            type='textarea'
            component={renderField}
          />
        )}
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
