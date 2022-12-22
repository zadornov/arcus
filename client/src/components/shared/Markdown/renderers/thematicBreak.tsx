import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';

const ThematicBreak = styled.hr`
  margin: 1em 0;
  border: none;
  border-bottom: 1px solid ${(props: any) => props.theme.border};
`;

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const thematicBreakRenderer = () => <ThematicBreak />;

export default thematicBreakRenderer;
