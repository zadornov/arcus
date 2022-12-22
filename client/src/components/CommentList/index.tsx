import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module './Item' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import CommentListItem from './Item';

const List = styled.ul`
  margin-top: 16px;
  list-style: none;
`;

const mapComments = (comments: any) =>
  comments.map((comment: any, index: any) => (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CommentListItem key={index} {...comment} />
  ));

const sortComments = (comments: any) =>
  // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
  comments.sort((a: any, b: any) => new Date(b.created) - new Date(a.created));

const CommentList = ({ comments }: any) =>
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  comments && <List>{mapComments(sortComments(comments))}</List>;

export default CommentList;
