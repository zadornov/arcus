import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { headerItem } from '../../shared/helpers';
// @ts-expect-error TS(6142): Module './Icon' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
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
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <DarkButton onClick={props.toggleDarkTheme}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <HeaderDarkButtonIcon />
  </DarkButton>
);

export default HeaderDarkButton;
