import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module '../Post' was resolved to '/home/zadornov/D... Remove this comment to see the full error message
import Post from '../Post';

const Item = styled.li`
  :not(:first-child) {
    border-top: 1px solid ${(props: any) => props.theme.border};
  }
`;

const PostListItem = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Item>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <Post {...props} />
  </Item>
);

export default PostListItem;
