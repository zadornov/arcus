import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import Markdown from '../shared/Markdown';

const Content = styled.div`
  padding: 12px;
`;

const CommentContent = (props: any) => (
  <Content>
    <Markdown>{props.children}</Markdown>
  </Content>
);

export default CommentContent;
