import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/form/Form';
import { transition } from '../shared/helpers';
import CommentFormTextArea from './TextArea';
import CommentFormSubmitButton from './SubmitButton';

const StyledForm = styled(Form)`
  ${transition('border', 'box-shadow')};

  margin-top: -1px;
  border: 1px solid ${(props: any) => props.theme.border};
  border-radius: 0 0 2px 2px;
  max-width: none;
  padding: 0;

  @media (hover: hover) {
    :hover {
      border: 1px solid ${(props: any) => props.theme.accent};
    }
  }

  :focus-within {
    border: 1px solid ${(props: any) => props.theme.accent};
    box-shadow: 0 0 0 2px ${(props: any) => props.theme.accent + '4d'};
  }

  @media (max-width: 768px) {
    margin-top: -1px;
    border-radius: 0;
    border-left: none;
    border-right: none;

    :hover,
    :focus-within {
      border-left: none;
      border-right: none;
    }
  }
`;

class CommentForm extends React.Component {
  // @ts-expect-error TS(2339) FIXME: Property 'attemptCreateComment' does not exist on ... Remove this comment to see the full error message
  createComment = (comment: any) => this.props.attemptCreateComment(comment);

  // @ts-expect-error TS(2339) FIXME: Property 'handleSubmit' does not exist on type 'Re... Remove this comment to see the full error message
  onSubmit = () => this.props.handleSubmit(this.createComment);

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit()}>
        <CommentFormTextArea
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          name='comment'
          onSubmit={this.onSubmit()}
        />
        <CommentFormSubmitButton />
      </StyledForm>
    );
  }
}

export default CommentForm;
