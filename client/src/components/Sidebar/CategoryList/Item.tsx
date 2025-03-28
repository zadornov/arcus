import React from 'react';
import styled from 'styled-components/macro';
import NavLink from '../../shared/NavLink';

const Item = styled(NavLink)`
  padding: 12px;
  font-size: 15px;
  text-decoration: none;
  color: ${(props: any) => props.theme.normalText};

  ::after {
    left: -1px;
    top: 0;
    bottom: 0;
    border-left: 3px solid ${(props: any) => props.theme.accent};
  }
`;

const SidebarCategoryListItem = ({ category }: any) => {
  const isAll = category === 'all';
  return (
    <Item exact={isAll} to={isAll ? '/' : `/a/${category}`}>
      {category}
    </Item>
  );
};

export default SidebarCategoryListItem;
