import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { headerItem } from '../../shared/helpers';
import HeaderDarkButtonIcon from './Icon';

const DarkButton = styled.span`
  ${headerItem};

  padding: 0 8px;
  cursor: pointer;

  @media (hover: hover) {
    :hover path {
      fill: ${(props: any) => props.theme.accent};
    }
  }
`;

const HeaderDarkButton = (props: any) => (
  <DarkButton onClick={props.toggleDarkTheme}>
    <HeaderDarkButtonIcon />
  </DarkButton>
);

export default HeaderDarkButton;
