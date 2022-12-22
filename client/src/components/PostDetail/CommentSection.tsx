import React from 'react';
// @ts-expect-error TS(6142): Module '../shared/Empty' was resolved to '/home/za... Remove this comment to see the full error message
import Empty from '../shared/Empty';
// @ts-expect-error TS(6142): Module '../CommentList' was resolved to '/home/zad... Remove this comment to see the full error message
import CommentList from '../CommentList';

const PostDetailCommentSection = ({ comments }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <>
    {!comments || comments.length === 0 ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Empty comments />
    ) : (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CommentList comments={comments} />
    )}
  </>
);

export default PostDetailCommentSection;
