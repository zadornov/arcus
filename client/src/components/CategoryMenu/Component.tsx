import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import CategoryMenuDropdown from './Dropdown';
import CategoryMenuCreatePostButton from './CreatePostButton';

const Menu = styled.nav`
  display: none;
  border: 1px solid ${(props: any) => props.theme.border};
  border-left: none;
  border-right: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const CategoryMenu = (props: any) => (
  <Menu>
    <Route
      path='/a/:category'
      children={({ match, history }: any) => (
        <CategoryMenuDropdown
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          category={match ? match.params.category : 'all'}
          history={history}
        />
      )}
    />
    {props.token && <CategoryMenuCreatePostButton />}
  </Menu>
);

export default CategoryMenu;
