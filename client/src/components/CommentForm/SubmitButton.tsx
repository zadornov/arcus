import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import SubmitButton from '../shared/form/SubmitButton';

const StyledSubmitButton = styled(SubmitButton)`
  margin: 4px;
  padding: 4px 12px;
`;

const CommentFormSubmitButton = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StyledSubmitButton type='submit'>submit</StyledSubmitButton>
);

export default CommentFormSubmitButton;
