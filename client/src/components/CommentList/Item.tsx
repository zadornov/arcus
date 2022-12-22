import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module '../Comment' was resolved to '/home/zadorno... Remove this comment to see the full error message
import Comment from '../Comment';

const Item = styled.li`
  margin-bottom: 8px;
`;

const CommentListItem = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Item>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <Comment {...props} />
  </Item>
);

export default CommentListItem;
