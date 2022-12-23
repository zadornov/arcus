import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import Comment from '../Comment';

const Item = styled.li`
  margin-bottom: 8px;
`;

const CommentListItem = (props: any) => (
  <Item>
    <Comment {...props} />
  </Item>
);

export default CommentListItem;
