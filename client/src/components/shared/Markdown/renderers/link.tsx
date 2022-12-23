import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import { transition } from '../../helpers';

const Link = styled.a`
  ${transition('color')};

  text-decoration: underline;
  color: ${(props: any) => props.theme.accent};

  :hover {
    filter: brightness(110%);
  }
`;

const linkRenderer = (props: any) => <Link {...props} />;

export default linkRenderer;
