import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import LoadingIndicatorSpinner from './Spinner';

const Box = styled.div`
  position: relative;
  margin: 48px auto 0;
  border: 1px solid ${(props: any) => props.theme.border};
  border-radius: 2px;
  width: 72px;
  height: 72px;
  background-color: ${(props: any) => props.theme.foreground};
`;

const LoadingIndicatorBox = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Box>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <LoadingIndicatorSpinner />
  </Box>
);

export default LoadingIndicatorBox;
