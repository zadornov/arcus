import React from 'react';
import styled from 'styled-components/macro';

const InlineCode = styled.code`
  border-radius: 2px;
  padding: 0.2em 0.4em;
  background-color: ${(props: any) => props.theme.pageBackground};
`;

const inlineCodeRenderer = (props: any) => <InlineCode {...props} />;

export default inlineCodeRenderer;
