import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';

const Pre = styled.pre`
  border-radius: 2px;
  padding: 12px 16px;
  background-color: ${(props: any) => props.theme.pageBackground};
  overflow-x: scroll;
`;

const codeRenderer = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Pre>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <code>{props.value}</code>
  </Pre>
);

export default codeRenderer;
