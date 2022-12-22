import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import PostVoteContainer from './Vote/Container';
// @ts-expect-error TS(6142): Module './Content' was resolved to '/home/zadornov... Remove this comment to see the full error message
import PostContent from './Content';

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: ${(props: any) => props.theme.foreground};
`;

const Post = ({ id, votes, score, comments, full, ...content }: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Wrapper>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <PostVoteContainer id={id} votes={votes} score={score} />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <PostContent
      showFullPost={full}
      id={id}
      commentCount={comments ? comments.length : 0}
      {...content}
    />
  </Wrapper>
);

export default Post;
