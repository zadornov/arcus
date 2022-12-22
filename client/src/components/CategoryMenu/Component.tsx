import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './Dropdown' was resolved to '/home/zadorno... Remove this comment to see the full error message
import CategoryMenuDropdown from './Dropdown';
// @ts-expect-error TS(6142): Module './CreatePostButton' was resolved to '/home... Remove this comment to see the full error message
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
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Menu>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <Route
      path='/a/:category'
      children={({ match, history }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CategoryMenuDropdown
          // @ts-expect-error TS(2769): No overload matches this call.
          category={match ? match.params.category : 'all'}
          history={history}
        />
      )}
    />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    {props.token && <CategoryMenuCreatePostButton />}
  </Menu>
);

export default CategoryMenu;
