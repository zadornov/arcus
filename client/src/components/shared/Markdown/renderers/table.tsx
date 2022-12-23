import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';

const Table = styled.table`
  border-collapse: collapse;
`;

const tableRenderer = (props: any) => <Table {...props} />;

export default tableRenderer;
