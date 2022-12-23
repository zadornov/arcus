import React from 'react';
import styled from 'styled-components/macro';

const Table = styled.table`
  border-collapse: collapse;
`;

const tableRenderer = (props: any) => <Table {...props} />;

export default tableRenderer;
