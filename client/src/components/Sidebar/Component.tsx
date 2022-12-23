import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import SidebarCreatePostButton from './CreatePostButton';
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
  <Wrapper>
    {token && <SidebarCreatePostButton />}
    <SidebarCategoryList />
  </Wrapper>
);

export default Sidebar;
