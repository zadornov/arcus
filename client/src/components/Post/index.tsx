// @ts-nocheck
import React from 'react';
import styled from 'styled-components/macro';
import PostVoteContainer from './Vote/Container';
import PostContent from './Content';

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: ${(props: any) => props.theme.foreground};
`;

const Post = ({ id, votes, score, comments, full, ...content }: any) => (
  <Wrapper>
    <PostVoteContainer id={id} votes={votes} score={score} />
    <PostContent
      showFullPost={full}
      id={id}
      commentCount={comments ? comments.length : 0}
      {...content}
    />
  </Wrapper>
);

export default Post;
