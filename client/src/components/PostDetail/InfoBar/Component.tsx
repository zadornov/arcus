import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module '../../shared/DeleteButton' was resolved to... Remove this comment to see the full error message
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
  // @ts-expect-error TS(2339): Property 'attemptDeletePost' does not exist on typ... Remove this comment to see the full error message
  deletePost = () => this.props.attemptDeletePost();

  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Wrapper round={!this.props.token}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{this.props.views} views</span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>&nbsp;|&nbsp;</span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{this.props.upvotePercentage}% upvoted</span>
        // @ts-expect-error TS(2339): Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
        {this.props.token &&
          // @ts-expect-error TS(2339): Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
          (this.props.user.id === this.props.author.id ||
            // @ts-expect-error TS(2339): Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
            this.props.user.admin) && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DeleteButton onClick={this.deletePost} />
          )}
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;
