import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module '../shared/Markdown' was resolved to '/home... Remove this comment to see the full error message
import Markdown from '../shared/Markdown';

const Content = styled.div`
  padding: 12px;
`;

const CommentContent = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Content>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <Markdown>{props.children}</Markdown>
  </Content>
);

export default CommentContent;
