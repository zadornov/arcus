import React from 'react';
import styled from 'styled-components/macro';
import { Field } from 'redux-form';
import Input from '../shared/form/Input';

const TextArea = styled(Input)`
  margin: 0;
  border: none;
  border-bottom: 1px solid ${(props: any) => props.theme.border};
  border-radius: 0;
  resize: none;

  :hover,
  :focus {
    border: none;
    border-bottom: 1px solid ${(props: any) => props.theme.border};
    box-shadow: none;
  }
`;

class CommentFormTextArea extends React.Component {
  onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // @ts-expect-error TS(2339) FIXME: Property 'onSubmit' does not exist on type 'Readon... Remove this comment to see the full error message
      this.props.onSubmit();
    }
  };

  renderField = (field: any) => (
    <TextArea
      as='textarea'
      {...field.input}
      placeholder='enter your comment'
      rows='2'
      onKeyDown={this.onKeyDown}
    />
  );

  render() {
    // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    return <Field name={this.props.name} component={this.renderField} />;
  }
}

export default CommentFormTextArea;
