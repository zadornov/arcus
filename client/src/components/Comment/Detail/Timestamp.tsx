import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import moment from 'moment';

const Timestamp = styled.span`
  margin-left: 4px;
  color: ${(props: any) => props.theme.mutedText};
`;

const CommentDetailTimestamp = (props: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Timestamp>{moment(props.created).fromNow()}</Timestamp>
);

export default CommentDetailTimestamp;
