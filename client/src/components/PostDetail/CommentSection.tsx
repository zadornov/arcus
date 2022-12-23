import React from 'react';
import Empty from '../shared/Empty';
import CommentList from '../CommentList';

const PostDetailCommentSection = ({ comments }: any) => (
  <>
    {!comments || comments.length === 0 ? (
      <Empty comments />
    ) : (
      <CommentList comments={comments} />
    )}
  </>
);

export default PostDetailCommentSection;
