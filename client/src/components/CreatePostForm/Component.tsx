import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field } from 'redux-form';
import categories from '../../categories';
// @ts-expect-error TS(6142): Module '../shared/form/Form' was resolved to '/hom... Remove this comment to see the full error message
import Form from '../shared/form/Form';
// @ts-expect-error TS(6142): Module '../shared/form/renderField' was resolved t... Remove this comment to see the full error message
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form
        // @ts-expect-error TS(2339): Property 'isFetching' does not exist on type 'Read... Remove this comment to see the full error message
        loading={this.props.isFetching}
        // @ts-expect-error TS(2339): Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name='type'
          label='type'
          type='radiogroup'
          component={renderField}
          options={postTypes}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Field name='title' label='title' type='text' component={renderField} />
        // @ts-expect-error TS(2339): Property 'form' does not exist on type 'Readonly<{... Remove this comment to see the full error message
        {this.props.form.values.type === 'link' && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field name='url' label='url' type='url' component={renderField} />
        )}
        // @ts-expect-error TS(2339): Property 'form' does not exist on type 'Readonly<{... Remove this comment to see the full error message
        {this.props.form.values.type === 'text' && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Field
            name='text'
            label='text'
            type='textarea'
            component={renderField}
          />
        )}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
