import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';

const Table = styled.table`
  border-collapse: collapse;
`;

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const tableRenderer = (props: any) => <Table {...props} />;

export default tableRenderer;
