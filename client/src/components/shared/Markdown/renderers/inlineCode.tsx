import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';

const InlineCode = styled.code`
  border-radius: 2px;
  padding: 0.2em 0.4em;
  background-color: ${(props: any) => props.theme.pageBackground};
`;

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const inlineCodeRenderer = (props: any) => <InlineCode {...props} />;

export default inlineCodeRenderer;
