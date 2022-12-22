import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import CommentDetailContainer from './Detail/Container';
// @ts-expect-error TS(6142): Module './Content' was resolved to '/home/zadornov... Remove this comment to see the full error message
import CommentContent from './Content';

const Wrapper = styled.div`
  border: 1px solid ${(props: any) => props.theme.border};
  border-radius: 2px;
  background-color: ${(props: any) => props.theme.foreground};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const Comment = ({ body, ...details }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <CommentDetailContainer {...details} />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <CommentContent>{body}</CommentContent>
  </Wrapper>
);

export default Comment;
