import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from './helpers';

const StyledLink = styled(Link)`
  ${link};

  font-weight: 500;
  color: ${(props: any) => props.theme.normalText};
`;

const Author = ({ username }: any) => (
  <StyledLink to={`/u/${username}`}>{username}</StyledLink>
);

export default Author;


