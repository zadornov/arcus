import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module './Logo' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import HeaderLogo from './Logo';
import HeaderDarkButtonContainer from './DarkButton/Container';
// @ts-expect-error TS(6142): Module './Username' was resolved to '/home/zadorno... Remove this comment to see the full error message
import HeaderUsername from './Username';
import HeaderNavLink from './NavLink';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px ${(props: any) => props.theme.shadow};
  border-bottom: 1px solid ${(props: any) => props.theme.border};
  height: 48px;
  padding: 0 10vw;
  background-color: ${(props: any) => props.theme.foreground};
  user-select: none;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = ({ user, logout }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <HeaderLogo />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <HeaderDarkButtonContainer />
    {user ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <HeaderUsername username={user.username} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <HeaderNavLink as='span' onClick={logout}>
          log out
        </HeaderNavLink>
      </>
    ) : (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <HeaderNavLink to='/login'>log in</HeaderNavLink>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <HeaderNavLink to='/signup'>sign up</HeaderNavLink>
      </>
    )}
  </Wrapper>
);

export default Header;
