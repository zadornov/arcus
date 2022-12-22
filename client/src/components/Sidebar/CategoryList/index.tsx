import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module './Item' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import SidebarCategoryListItem from './Item';
// @ts-expect-error TS(6142): Module './Header' was resolved to '/home/zadornov/... Remove this comment to see the full error message
import SidebarCategoryListHeader from './Header';
import categories from '../../../categories';

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapCategories = (categories: any) =>
  categories.map((category: any, index: any) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SidebarCategoryListItem key={index} category={category} />
  ));

const SidebarCategoryList = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <CategoryList>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <SidebarCategoryListHeader />
    {mapCategories(['all', ...categories])}
  </CategoryList>
);

export default SidebarCategoryList;
