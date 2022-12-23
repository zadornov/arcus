import React from 'react';
import styled from 'styled-components/macro';
import CommentListItem from './Item';

const List = styled.ul`
  margin-top: 16px;
  list-style: none;
`;

const mapComments = (comments: any) =>
  comments.map((comment: any, index: any) => (
    <CommentListItem key={index} {...comment} />
  ));

const sortComments = (comments: any) =>
  // @ts-expect-error TS(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
  comments.sort((a: any, b: any) => new Date(b.created) - new Date(a.created));

const CommentList = ({ comments }: any) =>
  comments && <List>{mapComments(sortComments(comments))}</List>;

export default CommentList;
