import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module '../../shared/Markdown' was resolved to '/h... Remove this comment to see the full error message
import Markdown from '../../shared/Markdown';

const Wrapper = styled.div`
  margin: 8px -8px;
  border: 1px solid ${(props: any) => props.theme.border};
  border-left: none;
  border-right: none;
  padding: 8px;
  background-color: ${(props: any) => props.theme.inputBackground};
`;

const PostContentFullText = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <Markdown>{props.children}</Markdown>
  </Wrapper>
);

export default PostContentFullText;
