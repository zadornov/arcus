import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module './CreatePostButton' was resolved to '/home... Remove this comment to see the full error message
import SidebarCreatePostButton from './CreatePostButton';
// @ts-expect-error TS(6142): Module './CategoryList' was resolved to '/home/zad... Remove this comment to see the full error message
import SidebarCategoryList from './CategoryList';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  margin-left: 24px;
  border: 1px solid ${(props: any) => props.theme.border};
  border-radius: 2px;
  background-color: ${(props: any) => props.theme.foreground};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({ token }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    {token && <SidebarCreatePostButton />}
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <SidebarCategoryList />
  </Wrapper>
);

export default Sidebar;
