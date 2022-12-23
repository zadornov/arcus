import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CreatePostButton = styled(Button)`
  display: flex;
  align-items: center;
  border-radius: 0;
  padding: 0 16px;
  text-decoration: none;
`;

const CategoryMenuCreatePostButton = () => (
  <CreatePostButton as={Link} to='/createpost'>
    create post
  </CreatePostButton>
);

export default CategoryMenuCreatePostButton;
