import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(6142): Module '../../shared/Author' was resolved to '/hom... Remove this comment to see the full error message
import Author from '../../shared/Author';
// @ts-expect-error TS(6142): Module './Timestamp' was resolved to '/home/zadorn... Remove this comment to see the full error message
import CommentDetailTimestamp from './Timestamp';
// @ts-expect-error TS(6142): Module '../../shared/DeleteButton' was resolved to... Remove this comment to see the full error message
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props: any) => props.theme.border};
  padding: 8px;
  font-size: 13px;
`;

class CommentDetail extends React.Component {
  // @ts-expect-error TS(2339): Property 'attemptDeleteComment' does not exist on ... Remove this comment to see the full error message
  deleteComment = () => this.props.attemptDeleteComment(this.props.id);

  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Wrapper>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Author username={this.props.author && this.props.author.username} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <CommentDetailTimestamp created={this.props.created} />
        // @ts-expect-error TS(2339): Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
        {this.props.token &&
          // @ts-expect-error TS(2339): Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
          (this.props.user.id === this.props.author.id ||
            // @ts-expect-error TS(2339): Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
            this.props.user.admin) && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DeleteButton onClick={this.deleteComment} />
          )}
      </Wrapper>
    );
  }
}

export default CommentDetail;
