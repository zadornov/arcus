import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
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


