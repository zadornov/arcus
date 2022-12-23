import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteDownvote = styled(PostVoteButton)`
  --iconColor: ${(props: any) =>
    props.didVote ? props.theme.downvote : props.theme.vote};

  ::after {
    border-bottom: 2px solid var(--iconColor);
    border-left: 2px solid var(--iconColor);
    top: -2px;
  }
`;

export default PostVoteDownvote;
