import React from 'react';
import styled from 'styled-components/macro';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  margin-top: -1px;
  border: 1px solid ${(props: any) => props.theme.border};
  ${(props: any) => props.round && 'border-radius: 0 0 2px 2px'};
  padding: 8px;
  background-color: ${(props: any) => props.theme.foreground};
  font-size: 13px;
  color: ${(props: any) => props.theme.mutedText};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

class PostDetailInfoBar extends React.Component {
  // @ts-expect-error TS(2339) FIXME: Property 'attemptDeletePost' does not exist on typ... Remove this comment to see the full error message
  deletePost = () => this.props.attemptDeletePost();

  render() {
    return (
      <Wrapper
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        round={
          // @ts-expect-error TS(2339) FIXME: Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
          !this.props.token
        }
      >
        <span>
          {
            // @ts-expect-error TS(2339) FIXME: Property 'views' does not exist on type 'Readonly<... Remove this comment to see the full error message
            this.props.views
          }{' '}
          views
        </span>
        <span>&nbsp;|&nbsp;</span>
        <span>{
          // @ts-expect-error TS(2339) FIXME: Property 'upvotePercentage' does not exist on type... Remove this comment to see the full error message
          this.props.upvotePercentage
        }% upvoted</span>
        {
          // @ts-expect-error TS(2339) FIXME: Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
          this.props.token &&
            // @ts-expect-error TS(2339) FIXME: Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
            (this.props.user.id === this.props.author.id ||
              // @ts-expect-error TS(2339) FIXME: Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
              this.props.user.admin) && (
              <DeleteButton onClick={this.deletePost} />
            )
        }
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;
