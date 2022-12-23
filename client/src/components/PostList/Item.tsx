import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import Post from '../Post';

const Item = styled.li`
  :not(:first-child) {
    border-top: 1px solid ${(props: any) => props.theme.border};
  }
`;

const PostListItem = (props: any) => (
  <Item>
    <Post {...props} />
  </Item>
);

export default PostListItem;
