// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteUpvote = styled(PostVoteButton)`
  --iconColor: ${(props: any) =>
    props.didVote ? props.theme.upvote : props.theme.vote};

  ::after {
    border-top: 2px solid var(--iconColor);
    border-right: 2px solid var(--iconColor);
    top: 3px;
  }
`;

export default PostVoteUpvote;
