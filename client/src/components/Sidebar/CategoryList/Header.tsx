import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { wideFont } from '../../shared/helpers';

const Header = styled.span`
  ${wideFont};

  display: block;
  padding: 12px;
  text-align: center;
  color: ${(props: any) => props.theme.mutedText};
`;

const SidebarCategoryListHeader = () => <Header>categories</Header>;

export default SidebarCategoryListHeader;
