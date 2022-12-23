import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import SidebarCategoryListItem from './Item';
import SidebarCategoryListHeader from './Header';
import categories from '../../../categories';

const CategoryList = styled.nav`
  display: flex;
  flex-direction: column;
`;

const mapCategories = (categories: any) =>
  categories.map((category: any, index: any) => (
    <SidebarCategoryListItem key={index} category={category} />
  ));

const SidebarCategoryList = () => (
  <CategoryList>
    <SidebarCategoryListHeader />
    {mapCategories(['all', ...categories])}
  </CategoryList>
);

export default SidebarCategoryList;
