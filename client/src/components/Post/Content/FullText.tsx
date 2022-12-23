import React from 'react';
import styled from 'styled-components/macro';
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
  <Wrapper>
    <Markdown>{props.children}</Markdown>
  </Wrapper>
);

export default PostContentFullText;
