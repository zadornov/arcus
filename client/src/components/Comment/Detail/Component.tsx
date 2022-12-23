import React from 'react';
import styled from 'styled-components/macro';
import Author from '../../shared/Author';
import CommentDetailTimestamp from './Timestamp';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props: any) => props.theme.border};
  padding: 8px;
  font-size: 13px;
`;

class CommentDetail extends React.Component {
  // @ts-expect-error TS(2339) FIXME: Property 'attemptDeleteComment' does not exist on ... Remove this comment to see the full error message
  deleteComment = () => this.props.attemptDeleteComment(this.props.id);

  render() {
    return (
      <Wrapper>
        <Author
          username={
            // @ts-expect-error TS(2339) FIXME: Property 'author' does not exist on type 'Readonly... Remove this comment to see the full error message
            this.props.author && this.props.author.username
          }
        />
        <CommentDetailTimestamp
          created={
            // @ts-expect-error TS(2339) FIXME: Property 'created' does not exist on type 'Readonl... Remove this comment to see the full error message
            this.props.created
          }
        />
        {
          // @ts-expect-error TS(2339) FIXME: Property 'token' does not exist on type 'Readonly<... Remove this comment to see the full error message
          this.props.token &&
            // @ts-expect-error TS(2339) FIXME: Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
            (this.props.user.id === this.props.author.id ||
              // @ts-expect-error TS(2339) FIXME: Property 'user' does not exist on type 'Readonly<{... Remove this comment to see the full error message
              this.props.user.admin) && (
              <DeleteButton onClick={this.deleteComment} />
            )
        }
      </Wrapper>
    );
  }
}

export default CommentDetail;
