import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import { css } from 'styled-components';

const tableHeader = css`
  text-align: center;
  font-weight: 600;
`;

const tableCell = (isHeader: any) => css`
  ${isHeader && tableHeader};
  border: 1px solid ${(props: any) => props.theme.border};
  padding: 0 0.75em;
`;

const TableCell = styled.td`
  ${(props: any) => tableCell(props.as === 'th')};
  line-height: 2;
`;

const tableCellRenderer = (props: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  if (props.isHeader) return <TableCell as='th'>{props.children}</TableCell>;
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <TableCell>{props.children}</TableCell>;
};

export default tableCellRenderer;
