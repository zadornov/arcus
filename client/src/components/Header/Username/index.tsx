import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import HeaderNavLink from '../NavLink';
import HeaderUsernameText from './Text';

const Wrapper = styled(HeaderNavLink)`
  flex-shrink: 1;
  border-left: 1px solid ${(props: any) => props.theme.border};
  border-right: 1px solid ${(props: any) => props.theme.border};
  min-width: 0;
`;

const HeaderUsername = (props: any) => (
  <Wrapper to={`/u/${props.username}`}>
    <HeaderUsernameText>{props.username}</HeaderUsernameText>
  </Wrapper>
);

export default HeaderUsername;
