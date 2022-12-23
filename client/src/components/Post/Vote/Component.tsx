import React from 'react';
import styled from 'styled-components/macro';
import PostVoteUpvote from './Upvote';
import PostVoteDownvote from './Downvote';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  padding: 4px;
  font-size: 12px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  color: ${(props: any) => props.theme.normalText};
`;

class PostVote extends React.Component {
  constructor(props: any) {
    super(props);
    const didVote = PostVote.existingVote(props);
    this.state = {
      score: props.score,
      didVote,
      didUpvote: didVote === 1,
      didDownvote: didVote === -1,
    };
  }

  static existingVote({ user, votes }: any) {
    const existingVote =
      user && votes && votes.find((vote: any) => vote.user === user.id);
    return existingVote ? existingVote.vote : 0;
  }

  componentWillUpdate(nextProps: any, nextState: any, nextContext: any) {
    // @ts-expect-error TS(2339) FIXME: Property 'score' does not exist on type 'Readonly<... Remove this comment to see the full error message
    if (this.props.score !== nextProps.score) {
      const didVote = PostVote.existingVote(nextProps);
      this.setState({
        score: nextProps.score,
        didVote,
        didUpvote: didVote === 1,
        didDownvote: didVote === -1,
      });
      // @ts-expect-error TS(2339) FIXME: Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
    } else if (this.props.token !== nextProps.token && !nextProps.token) {
      this.setState({
        didVote: false,
        didUpvote: false,
        didDownvote: false,
      });
    }
  }

  castVote(vote: any) {
    // @ts-expect-error TS(2339) FIXME: Property 'attemptVote' does not exist on type 'Rea... Remove this comment to see the full error message
    const { attemptVote, id, token } = this.props;
    if (token) {
      attemptVote(id, vote);
      this.setState({
        // @ts-expect-error TS(2339) FIXME: Property 'score' does not exist on type 'Readonly<... Remove this comment to see the full error message
        score: this.state.score + vote - this.state.didVote,
        didVote: vote,
        didUpvote: vote === 1,
        didDownvote: vote === -1,
      });
    }
  }

  // @ts-expect-error TS(2339) FIXME: Property 'didUpvote' does not exist on type 'Reado... Remove this comment to see the full error message
  upvote = () => this.castVote(this.state.didUpvote ? 0 : 1);

  // @ts-expect-error TS(2339) FIXME: Property 'didDownvote' does not exist on type 'Rea... Remove this comment to see the full error message
  downvote = () => this.castVote(this.state.didDownvote ? 0 : -1);

  render() {
    return (
      <Wrapper>
        <PostVoteUpvote
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          canVote={!!this.props.token}
          // @ts-expect-error TS(2339) FIXME: Property 'didUpvote' does not exist on type 'Reado... Remove this comment to see the full error message
          didVote={this.state.didUpvote}
          onClick={this.upvote}
        />
        <span>
          {
            // @ts-expect-error TS(2339) FIXME: Property 'score' does not exist on type 'Readonly<... Remove this comment to see the full error message
            this.state.score
          }
        </span>
        <PostVoteDownvote
          // @ts-expect-error TS(2769) FIXME: No overload matches this call.
          canVote={!!this.props.token}
          // @ts-expect-error TS(2339) FIXME: Property 'didDownvote' does not exist on type 'Rea... Remove this comment to see the full error message
          didVote={this.state.didDownvote}
          onClick={this.downvote}
        />
      </Wrapper>
    );
  }
}

export default PostVote;
